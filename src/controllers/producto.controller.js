import Producto from '../models/Producto';

export async function createProducto(req,res) {
    //console.log(req.body);
    const {
        nombre_producto,
        descripcion_producto
    } = req.body;

    try {
        let newProducto = await Producto.create({
            nombre_producto,
            descripcion_producto
        },{
            fields:['nombre_producto', 'descripcion_producto']
        });
        if (newProducto) {
             res.json({
                message: 'Producto creado',
                data: newProducto
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear el producto',
            data: {}
        });
    }
    //res.send('received');
}

export async function getProductos(_req,res){
    try {
        const productos = await Producto.findAll({
            attributes: ['id_producto','nombre_producto','descripcion_producto'],
            order: [
                ['nombre_producto','ASC']
            ]
        });
        res.json({
            data: productos
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Algo anda mal',
            data: {}
        });
    }
}

export async function getOneProducto(req,res){
    try {
        const {id} = req.params;
        const producto = await Producto.findOne({
            where: {
                id_producto: id
            }
        });

        res.json({
            data: producto
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Algo anda mal',
            data: {}
        });
    }
    
}

export async function deleteProducto(req,res){
    console.log('mensaje');
    try {
        const { id } = req.params;
        const deleteRowCount = await Producto.destroy({
            where: {
                id_producto: id
            }
        });

        res.json({
            message: 'Producto deleted succesfully',
            count: deleteRowCount
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo eliminar el producto',
            data: {}
        });
    };
}

export async function updateProducto(req,res){
    try {
        const { id } = req.params;
        const { nombre_producto, descripcion_producto } = req.body;
        const productos = await Producto.findAll({
        //    attributes: ['id_producto','nombre_producto','descripcion_producto'],
            where: {
                id_producto: id
            }
        });
        console.log('CONSOLE LOG 1 DE PRODUCTOS ENCONTRADOS', productos);
        if (productos.length > 0){
            productos.forEach(async producto=>{
                console.log('CONSOLE LOG 2 DE PRODUCTO EN FOR DE PRODUCTOS', producto);
                await producto.update({
                    nombre_producto,
                    descripcion_producto
                });
                console.log('CONSOLE LOG 4 DE PRODUCTO FUERA DE FOR DE PRODUCTOS', producto);
            })
        }
        console.log('CONSOLE LOG 4: PRODUCTOS QUE ENCONTRE PARA ACTUALIZAR DESPUESS DEL UPDATE', productos);
        

        return res.json({
            message: 'Producto updated succesfully',
            data: productos
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actualizar el producto',
            data: {}
        });
    };

}