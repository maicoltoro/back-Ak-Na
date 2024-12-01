import { Sequelize } from 'sequelize';
import { USER_BBDD } from '../Models/ModelConection';

const sequelize = new Sequelize(USER_BBDD.dataBase, USER_BBDD.user, USER_BBDD.password, {
  host: USER_BBDD.host,
  dialect: 'mssql', // Motor de SQL Server
  logging: false, // Puedes habilitarlo para depuración
  dialectOptions: {
    options: {
      encrypt: false, // Cambiar a true si usas conexiones seguras
    },
  },
});

export default sequelize;
