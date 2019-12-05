import Supermercado from '../models/Supermercado';

export async function createSupermercado(req,res) {
    //console.log(req.body);
    const {
        nombre_supermercado,
    } = req.body;

    try {
        let newSupermercado = await Supermercado.create({
            nombre_supermercado
        },{
            fields:['nombre_supermercado', 'descripcion_supermercado', 'created_at','updated_at']
        });
        if (newSupermercado) {
             res.json({
                message: 'Supermercado creado',
                data: newSupermercado
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear el supermercado',
            data: {}
        });
    }
    //res.send('received');
}

export async function getSupermercado(_req,res){
    //console.log(req.body);
    try {
        const supermercados = await Supermercado.findAll({
            attributes: ['id_supermercado', 'nombre_supermercado', 'created_at', 'updated_at'],
            order: [
                ['id_supermercado','DESC']
            ]
        });
        res.json({
            data: supermercados
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Algo anda mal, no se pudo obtener los supermercados',
            data: {}
        });
    }
}

export async function deleteSupermercado(req,res){
    try {
        const { id_supermercado } = req.body;
        const deleteRowCount = await Supermercado.destroy({
            where: {
                id_supermercado
            }
        });

        res.json({
            message: 'Supermercado deleted succesfully',
            count: deleteRowCount
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo eliminar el Supermercado',
            data: {}
        });
    }
}