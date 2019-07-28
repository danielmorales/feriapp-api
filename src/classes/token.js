import jwt from 'jsonwebtoken';

export default class Token {
    
    seed = "este-es-el-seed-secreto-de-mi-app";
    caducidad = '30d';

    constructor(){}

    static getJwtToken(payload){
        return jwt.sign({
            usuario: payload
        }, this.seed, {expiresIn: this.caducidad});
    }

    static comprobarToken(userToken){

        return new Promise((resolve, reject) => {

            jwt.verify(userToken, this.seed, (err, decoded) =>{
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
};