import Sequelize from 'sequelize';
import {db} from '../database/database';

import Puesto from './Puesto';

const Feria = db.define('feria', {
    id_feria:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    geo_feria:{
        type: Sequelize.STRING(30)
    },
    nombre_feria:{
        type: Sequelize.STRING(60)
    },
    descripcion_feria:{
        type: Sequelize.STRING
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

Feria.hasMany(Puesto, { foreignKey: 'fk_id_feria', sourceKey: 'id_feria' });
Puesto.belongsTo(Feria, { foreignKey: 'fk_id_feria', targetKey: 'id_feria' });

export default Feria;