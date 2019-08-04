import Sequelize from 'sequelize';
import {db} from '../database/database';


const Producto = db.define('producto', {
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