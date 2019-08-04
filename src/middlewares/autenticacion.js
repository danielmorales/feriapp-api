import {comprobarToken} from '../classes/token';

export const verificaToken = (req, res, next) => {

    const userToken = req.get('x-token') || '';

    comprobarToken(userToken)
    .then((decoded) => {
        console.log('HOLA ESTE ES MI DECODED DE LA FUNCION VERIFICA TOKEN EN EL ARCHIVO AUTENTICACION', decoded);
        req.usuario = decoded.usuario;
        next();
    })
    .catch(err =>{
        res.json({
            ok: false,
            message: 'Token incorrecto'
        });
    });


}