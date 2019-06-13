import Sequelize from 'sequelize';
import {sequelize} from '../database/database';


const Puesto = sequelize.define('puesto', {
    id_puesto:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre_puesto:{
        type: Sequelize.TEXT
    },
    
    descripcion_puesto:{
        type: Sequelize.TEXT

    },
    fk_id_feria:{
        type: Sequelize.INTEGER
    }
    /*codigoqr_puesto:{
        type: Sequelize.BLOB('tiny')
    },
    geo_puesto:{
        type: Sequelize.GEOMETRY('POINT')
    },
    foto_producto:{
        type: Sequelize.BLOB('tiny')
    }*/
},
{
    timestamps: false,
    freezeTableName: true
});

export default Puesto;