import Producto from '../models/Producto';
import {guardarImagenTemporal,generarNombreUnico,crearCarpetaUsuario} from '../classes/file-system'
// Importo las funciones que trabajan con el token
const FileSystem = require('../classes/file-system');

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

export async function updateFoto(req,res){

    if(!req.files){
        return res.status(400).json({
            ok: false,
            message: 'No se subio ningun archivo'
        });
    }

    if(!req.files.image){
        return res.status(400).json({
            ok: false,
            message: 'No se subio ningun archivo - image'
        });
    }

    const file = {
        name: req.files.image.name,
        data: req.files.image.data,
        encoding: req.files.image.encoding,
        tempFilePath: req.files.image.tempFilePath,
        truncated: req.files.image.truncated,
        mimetype: req.files.image.mimetype,
        mv: req.files.image.mv
    };
    console.log('MUESTRO EL CONTENIDO DEL FILE',file);

    if (!file.mimetype.includes('image')){
        return res.status(400).json({
            ok: false,
            message: 'Lo que subio no es una imagen'
        });
    }
    // Aqui llamo a las funciones de file-system.js de la carpeta classes
    var fileSystem = await FileSystem.guardarImagenTemporal(file, req.usuario.id_cuenta);
    
    res.json({
        ok: true,
        message: 'Casi se sube',
        file: file.mimetype

    });

}