const env = {
    database: 'prueba4',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    dialect: 'postgres',
    timezone: '-08:00',
    // Puerto de PostgreSQL
    port: 5454,
    pool: {
        max:5,
        min:0,
        aquire:30000,
        idle:10000
    }
};

module.exports = env;