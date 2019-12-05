import OfertaProducto from '../models/OfertaProducto';

export async function createOfertaProducto(req,res) {
    //console.log(req.body);
    const {
        fk_id_puesto,
        fk_id_producto,
        cantidad,
        precio
    } = req.body;

    try {
        
        let newOfertaProducto = await OfertaProducto.create({
            fk_id_puesto,
            fk_id_producto,
            cantidad,
            precio
        },{
            fields:['fk_id_puesto', 'fk_id_producto','cantidad','precio']
        });
        if (newOfertaProducto) {
             res.json({
                message: 'OfertaProducto agregado al puesto',
                data: newOfertaProducto
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo agregar la OfertaProducto',
            data: {}
        });
    }
    //res.send('received');
}

export async function getOfertasbyPuesto(req,res){
    const {fk_id_puesto} = req.body;
    try {
        const OfertasProductosPuesto = await OfertaProducto.findAll({
            attributes: ['fk_id_producto', 'precio', 'cantidad', 'created_at', 'updated_at'],
            where: {fk_id_puesto}
        });
        res.json({OfertasProductosPuesto});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo obtener las ofertas del puesto',
            data: {}
        }); 
    }
}

// Arreglar, falta especificar iddel puesto e id del producto en el body
export async function deleteOfertaProducto(req,res){
    try {
        const { id } = req.body;
        const deleteRowCount = await OfertaProducto.destroy({
            where: {
                id_puesto: id
            }
        });

        res.json({
            message: 'OfertaProducto deleted succesfully',
            count: deleteRowCount
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo eliminar la OfertaProducto',
            data: {}
        });
    }
}