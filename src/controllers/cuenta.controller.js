import Cuenta from '../models/Cuenta';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function createCuenta(req,res) {
    //console.log(req.body);
    const {
        nombre,
        apellido,
        correo_cuenta,
        password_cuenta
    } = req.body;

    try {
        let newCuenta = await Cuenta.create({
            nombre,
            apellido,
            correo_cuenta,
            password_cuenta: bcrypt.hashSync(req.body.password_cuenta, 10)  
        },{
            fields:['nombre', 'apellido','correo_cuenta','password_cuenta']
        });
        if (newCuenta) {
             res.json({
                message: 'Usuario creado',
                newCuenta
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear la cuenta',
            data: {}
        });
    }
   // res.send('Usuario creado');
}

export async function login(req,res){

    try {
       // const body = req.body;
        const cuenta = await Cuenta.findOne({
            where: {
                correo_cuenta: req.body.correo_cuenta
            }
        });
        // console.log(cuenta,'DATOS DE LA CUENTA ENCONTRADA');
        // if(cuenta===null) es lo mismo que if(!cuenta)
        if (!cuenta){
            res.json({
                ok: false,
                message: 'El correo no existe'
            });
        }
        // console.log(req.body.password_cuenta, 'PASSWORD INGRESADA');
        // console.log(cuenta.password_cuenta, 'PASSWORD REAL DE LA CUENTA');
        const comparacion = bcrypt.compareSync(req.body.password_cuenta, cuenta.password_cuenta);
        // console.log(comparacion);
        if(comparacion){
            // Aqui se fabrica el token que se entregará en el res.json
            const token = jwt.sign({cuenta}, req.app.get('superSecret') );

            res.json({
                ok: true,
                //token: 'KJ#4324298j-.LKS'
                message: 'disfruta de tu token',
                token
            });
        }
        else{
            res.json({
                ok: false,
                message: 'La contraseña es incorrecta'
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Ocurrió un problema, no se pudo conectar con la base de datos',
            data: {}
        });
    }
}