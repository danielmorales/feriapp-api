import Sequelize from 'sequelize';
import {db} from '../database/database';


const DetalleListaCompras = db.define('detallelistacompras', {
    id_detallelistacompras: {
        type: Sequelize.INTEGER,
        primaryKey: true
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

export default DetalleListaCompras;