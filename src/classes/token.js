import jwt from 'jsonwebtoken';

// Importo la configuración de la palabra del token
const config = require('../config/config')

export function getJwtToken(payload){

    const caducidad = '30d';
 
    return jwt.sign({
        usuario: payload
    }, config.secret, {expiresIn: caducidad});
}

export function comprobarToken(userToken){

    return new Promise( (resolve, reject) => {

        jwt.verify(userToken, config.secret, (err, decoded) =>{
            if(err){
                //no confiar
                reject();
            }else{
                //token valido
                resolve(decoded);
            }
        })
    });
}