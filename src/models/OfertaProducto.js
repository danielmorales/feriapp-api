import Sequelize from 'sequelize';
import {db} from '../database/database';
import Producto from './Producto';
import Puesto from './Puesto';

const OfertaProducto = db.define('ofertaproducto', {
    cantidad: {
        type: Sequelize.INTEGER
    },
    precio: {
        type: Sequelize.INTEGER
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


Producto.belongsToMany(Puesto, {through: OfertaProducto, as:'producto', foreignKey: 'fk_id_producto'});
Puesto.belongsToMany(Producto, {through: OfertaProducto, as:'producto', foreignKey: 'fk_id_puesto' });

export default OfertaProducto;