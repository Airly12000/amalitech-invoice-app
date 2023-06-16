const Sequelize = require('sequelize');
const { db } = require('../db/Connection');

const Items = db.define('item', {
	itemId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	invoiceInvoiceId: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	itemName: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	itemDescription: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	itemQuantity: {
		type: Sequelize.INTEGER,
		allowNull: true,
	},
	itemPrice: {
		type: Sequelize.FLOAT(10, 2),
		allowNull: true,
	},
	itemAmount: {
		type: Sequelize.FLOAT(10, 2),
		allowNull: true,
	},
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
});

Items.sync().then(() => {
	console.log('User Model synced');
});

module.exports = Items;
