import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("mysql://root:@localhost:3306/Estoque");

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;