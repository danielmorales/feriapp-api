import Sequelize from 'sequelize';
import {db} from '../database/database';


const ComentarioPuesto = db.define('comentariopuesto', {
    id_comentariopuesto: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    texto_comentariopuesto: {
        type: Sequelize.TEXT
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

export default ComentarioPuesto;