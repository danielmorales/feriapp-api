import Sequelize from 'sequelize';
import {db} from '../database/database';
import DetalleListaCompras from './DetalleListaCompras';


const Producto = db.define('producto', {
    id_producto:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_producto:{
        type: Sequelize.STRING(60)
    },
    descripcion_producto:{
        type: Sequelize.STRING(60)
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
    },
    img_producto:{
        type: Sequelize.STRING(60)
    }
},
{
    timestamps: false,
    freezeTableName: true
});

Producto.hasMany(DetalleListaCompras, { foreignKey: 'fk_id_producto', sourceKey: 'id_producto' });
DetalleListaCompras.belongsTo(Producto, { foreignKey: 'fk_id_producto', targetKey: 'id_producto' });

export default Producto;