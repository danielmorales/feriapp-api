import PuestoProducto from '../models/PuestoProducto';
import Producto from '../models/Producto';
import Puesto from '../models/Puesto';

// Falta actualizar Producto en Puesto

export async function createPuestoProducto(req,res) {
    //console.log(req.body);
    const {
        fk_id_puesto,
        fk_id_producto,
        precio,
        kgunidad
    } = req.body;

    try {
        
        let newPuestoProducto = await PuestoProducto.create({
            fk_id_puesto,
            fk_id_producto,
            precio,
            kgunidad
        },{
            fields:['fk_id_puesto', 'fk_id_producto','precio','kgunidad']
        });
        if (newPuestoProducto) {
             res.json({
                message: 'Producto agregado al puesto',
                data: newPuestoProducto
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo agregar el Producto al Puesto',
            data: {}
        });
    }
    //res.send('received');
}

export async function getProductosbyPuesto(req,res){
    const {fk_id_puesto} = req.params;
    try {
        const ProductosPuesto = await PuestoProducto.findAll({
            attributes: ['fk_id_producto', 'precio', 'updated_at'],
            where: {fk_id_puesto}
        });
        res.json({ProductosPuesto});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        }); 
    }
}

export async function deletePuestoProducto(req,res){
    try {
        const { id } = req.params;
        const deleteRowCount = await PuestoProducto.destroy({
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
    }
}