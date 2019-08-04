import Sequelize from 'sequelize';

// Importo la configuración de la base de datos
const env = require('../config/env')

export const db = new Sequelize(env.database, env.username, env.password, {
    // omitNull: true,
    host: env.host,
    dialect: env.dialect,
    timezone: env.timezone,
    port: env.port,
    pool: {
        max: env.pool.max,
        min: env.pool.min,
        aquire: env.pool.aquire,
        idle: env.pool.idle
    },
    // Para mostrar información por consola
    logging: false
})