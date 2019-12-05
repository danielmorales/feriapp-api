import Sequelize from 'sequelize';
import {db} from '../database/database';
import ComentarioPuesto from './ComentarioPuesto';

const Puesto = db.define('puesto', {
    id_puesto:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_puesto:{
        type: Sequelize.STRING(60)
    },
    descripcion_puesto:{
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
    },
    activo: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    geo_puesto:{
        type: Sequelize.STRING(30),
        unique: {
            arg: true,
            msg: 'Geo puesto ya registrada'
        }
    }
    /*
    ,
    fk_id_feria:{
        type: Sequelize.INTEGER
    },
    codigoqr_puesto:{
        type: Sequelize.BLOB('tiny')
    },
    geo_puesto:{
        type: Sequelize.GEOMETRY('POINT')
    }*/
},
{
    timestamps: false,
    freezeTableName: true
});

Puesto.hasMany(ComentarioPuesto, { foreignKey: 'fk_id_puesto', sourceKey: 'id_puesto' });
ComentarioPuesto.belongsTo(Puesto, { foreignKey: 'fk_id_puesto', targetKey: 'id_puesto' });

export default Puesto;