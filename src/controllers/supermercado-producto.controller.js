import SupermercadoProducto from '../models/SupermercadoProducto';

export async function createSupermercadoProducto(req,res) {
    //console.log(req.body);
    const {
        fk_id_supermercado,
        fk_id_producto,
        precio,
        kgunidad
    } = req.body;

    try {
        
        let newSupermercadoProducto = await SupermercadoProducto.create({
            fk_id_supermercado,
            fk_id_producto,
            precio,
            kgunidad
        },{
            fields:['fk_id_supermercado', 'fk_id_producto','precio','kgunidad']
        });
        if (newSupermercadoProducto) {
             res.json({
                message: 'Producto agregado al Supermercado',
                data: newSupermercadoProducto
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo agregar el Producto al Supermercado',
            data: {}
        });
    }
    //res.send('received');
}

export async function getProductosbySupermercado(req,res){
    const {fk_id_supermercado} = req.body;
    try {
        const productossupermercado = await SupermercadoProducto.findAll({
            attributes: ['fk_id_producto', 'precio', 'kgunidad', 'created_at'],
            where: {fk_id_supermercado}
        });
        res.json({productossupermercado});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        }); 
    }
}

export async function deleteSupermercadoProducto(req,res){
    try {
        const { fk_id_producto,
                fk_id_supermercado } = req.body;
        const deleteRowCount = await SupermercadoProducto.destroy({
            where: {
                fk_id_producto,
                fk_id_supermercado
            }
        });

        res.json({
            message: 'SupermercadoProducto deleted succesfully',
            count: deleteRowCount
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo eliminar el SupermercadoProducto',
            data: {}
        });
    }
}