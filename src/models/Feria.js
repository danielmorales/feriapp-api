import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

import Puesto from './Puesto';

const Feria = sequelize.define('feria', {
    id_feria:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    geo_feria:{
        type: Sequelize.TEXT
    },
    nombre_feria:{
        type: Sequelize.TEXT
    },
    descripcion_feria:{
        type: Sequelize.TEXT
    }
},
{
    timestamps: false,
    freezeTableName: true
});

Feria.hasMany(Puesto, { foreingKey: 'fk_id_feria', sourceKey: 'id_feria' });
Puesto.belongsTo(Feria, { foreingKey: 'fk_id_feria', sourceKey: 'id_feria' });

export default Feria;