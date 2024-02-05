import { Sequelize } from "sequelize";

const sequelize = new Sequelize('expense', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;