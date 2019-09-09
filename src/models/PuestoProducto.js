import Sequelize from 'sequelize';
import {db} from '../database/database';
import Producto from './Producto';
import Puesto from './Puesto';

const PuestoProducto = db.define('puestoproducto', {
    precio: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    }
},
{
    timestamps: false,
    freezeTableName: true
});

Producto.belongsToMany(Puesto, {
   // as: [Relationship],
    through: PuestoProducto, //this can be string or a model,
    foreignKey: 'fk_id_producto'
});

Puesto.belongsToMany(Producto, {
  //  as: [Relationship2],
    through: PuestoProducto,
    foreignKey: 'fk_id_puesto'
});

export default PuestoProducto;