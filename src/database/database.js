import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'test',
    'postgres',
    'postgres',
   
    {
        //omitNull: true,
        host:'localhost',
        dialect: 'postgres',
        port:5454,
        pool:{
            max:5,
            min:0,
            aquire:30000,
            idle:10000
        },
        //Para mostrar información por consola
        logging: false
    }
)