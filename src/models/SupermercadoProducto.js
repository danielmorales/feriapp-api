import Sequelize from 'sequelize';
import {db} from '../database/database';
import Producto from './Producto';
import Supermercado from './Supermercado';

const SupermercadoProducto = db.define('supermercadoproducto', {
    precio: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    kgunidad: {
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

Producto.belongsToMany(Supermercado, {through: SupermercadoProducto, foreignKey: 'fk_id_producto'});
Supermercado.belongsToMany(Producto, {through: SupermercadoProducto, foreignKey: 'fk_id_supermercado' }); 

export default SupermercadoProducto;