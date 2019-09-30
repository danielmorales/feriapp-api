import path from 'path';
import fs from 'fs';
import uniqid from 'uniqid';
import Producto from '../models/Producto';

export function guardarImagenTemporal(file, userId){

    return new Promise((resolve, reject)=>{
    
    // Crear carpeta
    const path = crearCarpetaUsuario(userId);
    console.log('Imprimo el path que retorna la función crearCarpetaUsuario', path);
    // Nombre archivo
    const nombreArchivo = generarNombreUnico(file.name)
    console.log('AQUI VA EL NOMBRE DEL ARCHIVO QUE SE GUARDA', nombreArchivo);

    // Mover el archivo del Temp a nuestra carpeta
    file.mv(`${ path }/${ nombreArchivo}`, (err) =>{
        if (err){
            //no se pudo mover
            reject(err);
        }
        else{
            //todo salio bien
            resolve();
        }
    });

    });
    
}

export function crearCarpetaUsuario(userId){

    // Transformo el id que viene como numero a string para que lo utilize la funcion resolve()
    userId = userId.toString();
    console.log('Aqui imprimo el userId', userId);
    const pathUser = path.resolve(__dirname,'../uploads', userId);
    const pathUserTemp = pathUser + '/temp';

    // Quitar despues este console.log
    console.log('Muestro el pathUser', pathUser);
    console.log('Muestro el pathUserTemp', pathUserTemp);

    const existe = fs.existsSync(pathUser);
    // Quitar este console.log
    console.log('Imprimo el existe: ', existe);

    if(!existe){
        fs.mkdirSync(pathUser);
        fs.mkdirSync(pathUserTemp);
    }
    // Quitar este console.log
    console.log('Termino la funcion de crearCarpetaUsuario');

    return pathUserTemp;
}

export function generarNombreUnico(nombreOriginal){
    const nombreArr = nombreOriginal.split('.');
    const extension = nombreArr[nombreArr.length - 1];

    const idUnico = uniqid();

    return `${idUnico}.${extension}`;
}

export function imagenesDeTempHaciaPost(userId){
    userId = userId.toString();
    const pathTemp = path.resolve(__dirname,'../uploads', userId, 'temp');
    const pathPost = path.resolve(__dirname,'../uploads', userId, 'posts');

    if (!fs.existsSync(pathTemp)){
        return [];
    }

    if (!fs.existsSync(pathPost)){
        fs.mkdirSync(pathPost);
    }

    const imagenesTemp = obtenerImagenesEnTemp(userId);

    imagenesTemp.forEach(imagen => {
        fs.renameSync(`${pathTemp}/${imagen}`,`${pathPost}/${imagen}`)
    });
    // imagenesTemp se utiliza para guardar la info en la base de datos de las imagenes referenciadas
    return imagenesTemp;

}

function obtenerImagenesEnTemp(userId){
    userId = userId.toString();
    const pathTemp = path.resolve(__dirname,'../uploads', userId, 'temp');
    console.log('Imprimo la constante pathTemp de obtenerImagenes: ', pathTemp);
    console.log('Hola, aqui imprimiento un fs: ', fs.readdirSync(pathTemp));
    return fs.readdirSync(pathTemp) || [];

}

// Esta funcion puede guardar imagenes en la BD, y recuperarlas
// Esta incompleta
// Mejor guardar la referencia como un string en la bd
export function guardarImagenBD(userId){
    userId = userId.toString();
    const pathUser = path.resolve(__dirname,'../uploads', userId);
    const pathUserTemp = pathUser + '/temp/haqs4u4k0vur0xl.jpg';
    const pathImagenRecuperada = pathUser + '/posts/recuperadadelaBD.jpg';

    const nombre_producto = 'ejemplo';
    const descripcion_producto = 'ejemplo de descripcion'; 

    // Aqui va la logica para guardar la foto de la carpeta temp en la base de datos
    // Se utiliza el paquete fs para leer el archivo de la carpeta temp y luego se escribe en otra carpeta
    var imageData = fs.readFileSync(pathUserTemp); // falta agregar el nombre del archivo
    console.log('Estoy dentro de la funcion guardarImagenBD, esta es la variable imageData: ', imageData);
	Producto.create({
        nombre_producto,
        descripcion_producto,
		img_producto: imageData
	},{
        fields:['nombre_producto', 'descripcion_producto','img_producto']
    }).then(producto => {
		try{
			fs.writeFileSync(pathImagenRecuperada, producto.img_producto);		
			
			// exit node.js app
			process.exit(0);
		}catch(e){
			console.log(e);
		}
	});

}

export function getFotoUrl(productoId, img){
    // Path Foto
    const pathFoto = path.resolve(__dirname, '../uploads', productoId, 'posts', img);

    // Si la imagen no existe, mostrar una por defecto
    const existe = fs.existsSync(pathFoto);
    if(!existe){
        return path.resolve(__dirname, '../assets/400x250.jpg');
    }

    return pathFoto;
}