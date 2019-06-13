import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import Producto from './Producto';
import Puesto from './Puesto';


const PuestoProducto = sequelize.define('puestoproducto', {
    id_puesto_producto:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fk_id_puesto:{
        type: Sequelize.INTEGER
    },
    fk_id_producto:{
        type: Sequelize.INTEGER
    }
},
{
    timestamps: false,
    freezeTableName: true
});


Producto.belongsToMany(Puesto, {
   // as: [Relationship],
    through: PuestoProducto, //this can be string or a model,
    foreignKey: 'fk_id_puesto'
});

Puesto.belongsToMany(Producto, {
  //  as: [Relationship2],
    through: PuestoProducto,
    foreignKey: 'fk_id_producto'
});


export default PuestoProducto;