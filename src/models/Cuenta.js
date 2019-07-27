import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Cuenta = sequelize.define('cuenta', {
    id_cuenta:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido:{
        type: Sequelize.STRING
    },
    correo_cuenta:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail:true
          },
          unique: {
              args: true,
              msg: 'Email address already in use!'
          }
    },
    password_cuenta:{
        type: Sequelize.STRING,
        allowNull: false
    }
/*,
    imagen_cuenta:{
        type: Sequelize.BLOB('tiny')
    }*/
},
{
    timestamps: false,
  //  createdAt: Sequelize.DATE,
  //  updatedAt: Sequelize.DATE,
    freezeTableName: true
});

export default Cuenta;