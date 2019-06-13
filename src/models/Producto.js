import Sequelize from 'sequelize';
import {sequelize} from '../database/database';


const Producto = sequelize.define('producto', {
    id_producto:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre_producto:{
        type: Sequelize.TEXT
    },
    descripcion_producto:{
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

export default Producto;