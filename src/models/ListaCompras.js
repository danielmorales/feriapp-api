import Sequelize from 'sequelize';
import {db} from '../database/database';
import DetalleListaCompras from './DetalleListaCompras';

const ListaCompras = db.define('listacompras', {
    id_listacompras: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
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


ListaCompras.hasMany(DetalleListaCompras, { foreignKey: 'fk_id_listacompras', sourceKey: 'id_listacompras', onDelete: 'cascade' });
DetalleListaCompras.belongsTo(ListaCompras, { foreignKey: 'fk_id_listacompras', targetKey: 'id_listacompras' });
// AGREGAR RELACION DETALLE LISTA DE COMPRAS CON PRODUCTOS

export default ListaCompras;