import ListaCompras from '../models/ListaCompras';
import Cuenta from '../models/Cuenta';

export async function createListaCompras(req,res) {

    const {
        fk_id_cuenta
    } = req.body;

    try {
        let newListaCompra = await ListaCompras.create({
            fk_id_cuenta
        },{
            fields:['fk_id_cuenta']
        });
        if ( newListaCompra ) {
             res.json({
                message: 'ListaCompra creada',
                data: newListaCompra 
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear la lista de compras',
            data: {}
        });
    }
}

export async function getListasComprasbyCuenta(req,res){
    const { fk_id_cuenta } = req.body;
    try {
        const listas = await ListaCompras.findAll({
            attributes: ['created_at', 'updated_at', 'id_listacompras', 'fk_id_cuenta'],
            where: {fk_id_cuenta},
            include: [{model: Cuenta}]
        });
    res.json({listas});
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
        message: 'Something goes wrong',
        data: {}
        }); 
    }
}

// Falta validar que si no existe el ID puesto, que tire un mensaje
export async function deleteListaCompras(req,res){
    try {
        const { id_listacompras } = req.body;
        const deleteRowCount = await ListaCompras.destroy({
            where: {
                id_listacompras
            }
        });

        res.json({
            message: 'Lista de Compras deleted succesfully',
            count: deleteRowCount
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo eliminar la Lista de Compras',
            data: {}
        });
    }
}