import Cuenta from '../models/Cuenta';
import bcrypt from 'bcrypt';

// Importo las funciones que trabajan con el token
const configToken = require('../classes/token');

// QUITAR DATOS IMPORTANTES EN LA RESPUESTA JSON
export async function createCuenta(req,res) {
    const {
        nombre,
        apellido,
        correo_cuenta,
        password_cuenta
    } = req.body;

    console.log(req.body);

    try {
        let cuenta = await Cuenta.create({
            nombre,
            apellido,
            correo_cuenta,
            password_cuenta: bcrypt.hashSync(req.body.password_cuenta, 10)  
        },{
            fields:['nombre', 'apellido','correo_cuenta','password_cuenta']
        });

        if (cuenta) {
            const tokenuser = configToken.getJwtToken({
                id_cuenta: cuenta.id_cuenta,
                nombre: cuenta.nombre,
                apellido: cuenta.apellido,
                correo_cuenta: cuenta.correo_cuenta
            });

             res.json({
                ok: true,
                token: tokenuser,
                message: 'Usuario creado',
                cuenta
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear la cuenta',
            data: {}
        });
    }
}

export async function login(req,res){

    try {
       // const body = req.body;
        const cuenta = await Cuenta.findOne({
            where: {
                correo_cuenta: req.body.correo_cuenta
            }
        });
        // console.log(cuenta,'DATOS DE LA CUENTA ENCONTRADA');
        // if(cuenta===null) es lo mismo que if(!cuenta)
        if (!cuenta){
            res.json({
                ok: false,
                message: 'El correo no existe'
            });
        }
        // console.log(req.body.password_cuenta, 'PASSWORD INGRESADA');
        // console.log(cuenta.password_cuenta, 'PASSWORD REAL DE LA CUENTA');
        const comparacion = bcrypt.compareSync(req.body.password_cuenta, cuenta.password_cuenta);
        // console.log(comparacion);
        if(comparacion){
            // Aqui se fabrica el token que se entregará en el res.json
         //   const token = jwt.sign({cuenta}, req.app.get(config.secret), );
            const tokenuser = configToken.getJwtToken({
                id_cuenta: cuenta.id_cuenta,
                nombre: cuenta.nombre,
                apellido: cuenta.apellido,
                correo_cuenta: cuenta.correo_cuenta
            });

            res.json({
                ok: true,
                //token: 'KJ#4324298j-.LKS'
                message: 'disfruta de tu token',
                tokenuser
            });
        }
        else{
            res.json({
                ok: false,
                message: 'La contraseña es incorrecta'
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Ocurrió un problema, no se pudo conectar con la base de datos',
            data: {}
        });
    }
}

// La función pasa primero por verificarToken
export async function updateCuenta(req, res){

    const user = {
        nombre: req.body.nombre || req.usuario.nombre,
        apellido: req.body.apellido || req.usuario.apellido,
        correo_cuenta: req.body.correo_cuenta || req.usuario.correo_cuenta
    }

    try {
        // buscar la cuenta por id, sacada desde el token
        const cuenta = await Cuenta.findAll({
            where: {
                id_cuenta: req.usuario.id_cuenta
            }
        });

        if (cuenta.length > 0){
            cuenta.forEach(async cuenta=>{
                console.log('CONSOLE LOG 2 DE PRODUCTO EN FOR DE PRODUCTOS', cuenta);
                await cuenta.update({
                    // Aqui se puede cambiar todo por user.algo, ya que lo declaro arriba pero nunca lo ocupo
                    nombre: req.body.nombre || req.usuario.nombre,
                    apellido: req.body.apellido || req.usuario.apellido,
                    correo_cuenta: req.body.correo_cuenta || req.usuario.correo_cuenta,
                    updated_at: new Date()
                });
                console.log('CONSOLE LOG 4 DE PRODUCTO FUERA DE FOR DE PRODUCTOS', cuenta);
            })
        }
        console.log('ESTA ES EL ID DE CUENTA QUE ENCUENTRO', cuenta);
        const { nombre, apellido, correo_cuenta } = req.body;
     //   console.log('EL REQ.BODY ES: ');
     //   console.log(req.body);
        console.log('EL REQ.USUARIO ES: ');
        console.log(req.usuario);

         // la constante actualizado solo toma el valor de 1 o 0 si se actualiza
         /*
        await cuenta.update(
          { 
            nombre: user.nombre, // Si no selecciono el nombre en postman, me regresa al primer nombre 'camila'
            apellido: user.apellido,
            correo_cuenta: user.correo_cuenta
          },

          //{ where: { id_cuenta: req.usuario.id_cuenta } } // Se saca la info del id del token y se busca en la bd
        );
        */

        // Se fabrica el nuevo token
        const tokenuser = configToken.getJwtToken({
            id_cuenta: req.usuario.id_cuenta,
            nombre: nombre || req.usuario.nombre,
            apellido: apellido || req.usuario.id_cuenta,
            correo_cuenta: correo_cuenta || req.usuario.correo_cuenta
        });

         res.json({
            ok: true,
            token: tokenuser,
            message: 'Usuario Actualizado',
        });

      } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actualizar la cuenta',
            data: {}
        });
    };
 
}

// Funcion sin token
// Quitar información importante, mostrar solo los datos necesarios
// Mostrar id, nombre, email, avatar
export async function getOneCuenta(req, res){
    try {
      //  const {id} = req.params;
        const cuenta = await Cuenta.findOne({
            attributes: ['nombre','apellido'],
            where: {
                id_cuenta: req.body.id_cuenta
            }
        });

        res.json({
            data: cuenta
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo obtener los datos de la cuenta',
            data: {}
        });
    }
    
}