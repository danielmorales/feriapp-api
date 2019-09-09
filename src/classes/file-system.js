import path from 'path';
import fs from 'fs';
import uniqid from 'uniqid';

export function guardarImagenTemporal(file, userId){

    return new Promise((resolve, reject)=>{
    
    // Crear carpeta
    const path = crearCarpetaUsuario(userId);
    console.log('Imprimo el path de la funcion crearCarpetaUsuario', path);
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

export function generarNombreUnico(nombreOriginal){
    const nombreArr = nombreOriginal.split('.');
    const extension = nombreArr[nombreArr.length - 1];

    const idUnico = uniqid();

    return `${idUnico}.${extension}`;
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
    console.log('Imprimo el existe: ', existe);

    if(!existe){
        fs.mkdirSync(pathUser);
        fs.mkdirSync(pathUserTemp);
    }
    
    console.log('Termino la funcion de crearCarpetaUsuario');

    return pathUserTemp;
}