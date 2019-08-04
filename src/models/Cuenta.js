import Sequelize from 'sequelize';
import {db} from '../database/database';


const Cuenta = db.define('cuenta', {
    id_cuenta:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre:{
        type: Sequelize.STRING(60),
        allowNull: false
    },
    apellido:{
        type: Sequelize.STRING(60)
    },
    correo_cuenta:{
        type: Sequelize.STRING(30),
        allowNull: false,
        validate: {
            isEmail: { msg: 'Agrega un correo valido' }
        },
        unique: {
            arg: true,
            msg: 'Usuario ya registrado'
        }
    },
    password_cuenta:{
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El password no puede ir vacio'
            }
        }
    },
    created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }, 
    activo: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
/*
}
,
    imagen_cuenta:{
        type: Sequelize.BLOB('tiny')
    }*/
},
{
    timestamps: false,

    freezeTableName: true
});

export default Cuenta;