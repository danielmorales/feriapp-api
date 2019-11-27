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

Producto.belongsToMany(Puesto, {through: PuestoProducto, foreignKey: 'fk_id_producto'});
Puesto.belongsToMany(Producto, {through: PuestoProducto, foreignKey: 'fk_id_puesto' });

export default PuestoProducto;