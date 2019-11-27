import DetalleListaCompras from '../models/DetalleListaCompras';

export async function createDetalleListaCompras(req,res) {

    const {
        fk_id_producto,
        fk_id_listacompras
    } = req.body;

    try {
        let newDetalleListaCompras = await DetalleListaCompras.create({
            fk_id_producto,
            fk_id_listacompras
        },{
            fields:['fk_id_producto','fk_id_listacompras']
        });
        if ( newDetalleListaCompras ) {
             res.json({
                message: 'DetalleListaCompra creada',
                data: newDetalleListaCompras
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear el detalle lista de compras',
            data: {}
        });
    }
}

export async function getDetalleListaComprasbyListaCompra(req,res){
    const {fk_id_listacompras} = req.body;
    try {
        const detalleListaCompras = await DetalleListaCompras.findAll({
            attributes: ['id_detallelistacompras', 'fk_id_producto', 'fk_id_listacompras', 'created_at', 'updated_at'],
            where: {fk_id_listacompras}
        });
        res.json({detalleListaCompras});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        }); 
    }
}

export async function deleteDetalleListaCompras(req,res){
    try {
        const { id_detallelistacompras } = req.body;
        const deleteRowCount = await DetalleListaCompras.destroy({
            where: {
                id_detallelistacompras
            }
        });

        res.json({
            message: 'DetalleListaCompras deleted succesfully',
            count: deleteRowCount
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo eliminar el DetalleListaCompras',
            data: {}
        });
    }
}