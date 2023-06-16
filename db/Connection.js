const Sequelize = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../', '.env') });

// const db = new Sequelize(
// 	process.env.DB_DATABASE,
// 	process.env.DB_USERNAME,
// 	process.env.DB_PASSWORD,
// 	{
// 		host: process.env.DB_HOST,
// 		dialect: 'mysql',
// 		operatorAliases: false,
// 	}
// );

const db = new Sequelize(process.env.DATABASE_URL);

const testDbConnection = async () => {
	try {
		await db.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

module.exports = { db, testDbConnection };
