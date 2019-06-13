import Feria from '../models/Feria';

export async function createFeria(req,res) {
    //console.log(req.body);
    const {
        geo_feria,
        nombre_feria,
        descripcion_feria
    } = req.body;

    try {
        let newFeria = await Feria.create({
            geo_feria,
            nombre_feria,
            descripcion_feria
        },{
            fields:['geo_feria', 'nombre_feria','descripcion_feria']
        });
        if (newFeria) {
             res.json({
                message: 'Feria creada',
                data: newFeria
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear la feria',
            data: {}
        });
    }
    //res.send('received');
}

export async function getFerias(_req,res){
    try {
        const ferias = await Feria.findAll({
            attributes: ['id_feria','geo_feria','nombre_feria','descripcion_feria'],
            order: [
                ['id_feria','DESC']
            ]
        });
        res.json({
            data: ferias
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo obtener las ferias',
            data: {}
        });
    }
}

export async function getOneFeria(req,res){
    try {
        const {id} = req.params;
        const feria = await Feria.findOne({
            where: {
                id_feria: id
            }
        });

        res.json({
            data: feria
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo obtener la feria',
            data: {}
        });
    }
    
}

export async function deleteFeria(req,res){
    try {
        const { id } = req.params;
        const deleteRowCount = await Feria.destroy({
            where: {
                id_feria: id
            }
        });

        res.json({
            message: 'Feria deleted succesfully',
            count: deleteRowCount
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo eliminar la feria',
            data: {}
        });
    };
}

export async function updateFeria(req,res){
    try {
        const { id } = req.params;
        const { geo_feria, nombre_feria, descripcion_feria } = req.body;
        const ferias = await Feria.findAll({
            attributes: ['id_feria','geo_feria','nombre_feria','descripcion_feria'],
            where: {
                id_feria: id
            }
        });
        if (ferias.length > 0){
            ferias.forEach(async feria=>{
                await feria.update({
                    geo_feria,
                    nombre_feria,
                    descripcion_feria
                });
            })
        }

        return res.json({
            message: 'Feria updated succesfully',
            data: ferias
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actualizar la feria',
            data: {}
        });
    };

}
