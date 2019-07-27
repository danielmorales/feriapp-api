import Cuenta from '../models/Cuenta';

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
            password_cuenta
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