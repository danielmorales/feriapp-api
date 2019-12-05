import Sequelize from 'sequelize';
import {db} from '../database/database';

const Supermercado = db.define('supermercado', {
    id_supermercado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_supermercado:{
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: {
            arg: true,
            msg: 'Nombre de supermercado ya registrado'
        }
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

export default Supermercado;