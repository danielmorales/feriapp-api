import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Cuenta = sequelize.define('cuenta', {
    id_cuenta:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.TEXT
    },
    apellido:{
        type: Sequelize.TEXT
    },
    correo_cuenta:{
        type: Sequelize.TEXT
    },
    password:{
        type: Sequelize.TEXT
    }
/*,
    foto_producto:{
        type: Sequelize.BLOB('tiny')
    }*/
},
{
    timestamps: false,
    freezeTableName: true
});

export default Cuenta;