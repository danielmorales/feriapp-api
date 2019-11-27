import Puesto from '../models/Puesto';
import Producto from '../models/Producto';

export async function createPuesto(req,res) {
    //console.log(req.body);
    const {
        nombre_puesto,
        descripcion_puesto,
        fk_id_feria,
    } = req.body;

    try {
        let newPuesto = await Puesto.create({
            nombre_puesto,
            descripcion_puesto,
            fk_id_feria
        },{
            fields:['nombre_puesto', 'descripcion_puesto', 'fk_id_feria']
        });
        if (newPuesto) {
             res.json({
                message: 'Puesto creado',
                data: newPuesto
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear el puesto',
            data: {}
        });
    }
    //res.send('received');
}

export async function getPuestos(_req,res){
    //console.log(req.body);
    try {
        const puestos = await Puesto.findAll({
            attributes: ['id_puesto', 'nombre_puesto', 'descripcion_puesto', 'fk_id_feria'],
            order: [
                ['id_puesto','DESC']
            ]
        });
        res.json({
            data: puestos
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Algo anda mal, no se pudo obtener los puestos',
            data: {}
        });
    }
}

export async function getOnePuesto(req,res){
    console.log("Obtener un puesto");
    try {
        const {id} = req.params;
        const puesto = await Puesto.findOne({
            where: {id_puesto: id},
            attributes: ['nombre_puesto', 'descripcion_puesto', 'fk_id_feria']
        });

        res.json({
            data: puesto
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo obtener el puesto',
            data: {}
        });
    }
    
}

export async function deletePuesto(req,res){
    try {
        const { id } = req.params;
        const deleteRowCount = await Puesto.destroy({
            where: {
                id_puesto: id
            }
        });

        res.json({
            message: 'Puesto deleted succesfully',
            count: deleteRowCount
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo eliminar el Puesto',
            data: {}
        });
    };
}

export async function updatePuesto(req,res){
    try {
        const { id } = req.params;
        const { nombre_puesto, descripcion_puesto, fk_id_feria} = req.body;
        const puestos = await Puesto.findAll({
            attributes: ['id_puesto','nombre_puesto','descripcion_puesto','fk_id_feria'],
            where: {
                id_puesto: id
            }
        });
        if (puestos.length > 0){
            puestos.forEach(async puestos=>{
                await puestos.update({
                    nombre_puesto,
                    descripcion_puesto,
                    fk_id_feria
                });
            })
        }

        return res.json({
            message: 'Puesto updated succesfully',
            data: puestos
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actualizar el Puesto',
            data: {}
        });
    };

}

export async function getPuestosbyFeria(req,res){
    const { fk_id_feria } = req.params;
    try {
        const puestos = await Puesto.findAll({
            attributes: ['id_puesto', 'nombre_puesto', 'descripcion_puesto', 'fk_id_feria'],
            where: {fk_id_feria},
            include: [{model: Producto}]
        });
        res.json({puestos});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        }); 
    }
}
