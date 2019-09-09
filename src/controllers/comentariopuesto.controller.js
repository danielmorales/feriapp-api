import ComentarioPuesto from '../models/ComentarioPuesto';
import Cuenta from '../models/Cuenta';


// Se usa el TOKEN para sacar de ahí el id del usuario y no del req.body 
export async function crearComentario(req, res){
    const {
        texto_comentariopuesto,
        fk_id_puesto
    } = req.body;

    try {
        let newComentarioPuesto = await ComentarioPuesto.create({
            texto_comentariopuesto,
            fk_id_puesto,
            fk_id_cuenta: req.usuario.id_cuenta
        },{
            fields:['texto_comentariopuesto','fk_id_puesto','fk_id_cuenta']
        });
        if (newComentarioPuesto) {
             res.json({
                message: 'Comentario del puesto creado',
                data: newComentarioPuesto
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actualizar la cuenta',
            data: {}
        });
    }
}

// Actualizar solo debe ser realizado por el usuario que hizo el post
// Realizar un if, si el id que hay en el token es igual al fk_id_cuenta, entonces modificar
export async function updateComentario(req, res){

    const comentario = {
        texto_comentariopuesto: req.body.texto_comentariopuesto,
        id_comentariopuesto: req.body.id_comentariopuesto
    }

    try {
        // Buscar todos los comentarios de una cierta id, extraida desde TOKEN
        const comentarios = await ComentarioPuesto.findAll({
            where: {
                fk_id_cuenta: req.usuario.id_cuenta,
                fk_id_puesto: req.body.fk_id_puesto
            }
        });

        if (comentarios.length > 0){
            comentarios.forEach(async comentarios=>{
                console.log('1111111: Aqui muestro los comentarios hechos por el fk_id_cuenta', comentarios);
                await comentarios.update({
                    where: {
                        id_comentariopuesto: comentario.id_comentariopuesto
                    },
                    texto_comentariopuesto: comentario.texto_comentariopuesto,
                    updated_at: new Date()
                });
                console.log('2222222: Muestro comentarios', comentarios);
            })
        }
        console.log('333333: Muestro comentarios', comentarios);

         res.json({
            message: 'Comentario del puesto actualizado',
            data: comentarios
        });

      } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actualizar el comentario',
            data: {}
        });
    };
 
}
// Eliminar solo debe ser realizado por el usuario que hizo el post

// Esta funcion no requiere token porque puede ser vista por cualquier usuario

// Usar eager loading de sequelize para anidar los usuarios de los comentarios
export async function getComentariosbyPuesto(req,res){
    // Lógica para paginado
    // Creo una constante para la pagina, la que se lee en la query de la url
    const pagina = Number(req.query.pagina) || 1;
    var skip = pagina - 1;
    skip = skip * 10;

    const { fk_id_puesto } = req.body;

    try {
        const comentariopuesto = await ComentarioPuesto.findAll({

            attributes: ['id_comentariopuesto','texto_comentariopuesto', 'created_at', 'updated_at','fk_id_cuenta'],
            where: {fk_id_puesto},
            include: [ {model: Cuenta, attributes: {exclude:'password_cuenta'}}],
            limit: 10,
            offset: skip
        });
        res.json({
            ok: true,
            pagina,
            comentariopuesto
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudieron obtener los comentarios del puesto',
            data: {}
        }); 
    }
}
