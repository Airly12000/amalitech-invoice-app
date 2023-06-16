const Sequelize = require('sequelize');
const { db } = require('../db/Connection');

const Invoices = db.define('invoice', {
	invoiceId: {
		type: Sequelize.STRING,
		primaryKey: true,
		allowNull: false,
	},
	companyName: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	companyEmail: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	companyAddress: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	companyCity: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	companyZipCode: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	companyTelephone: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	companyCountry: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	companyState: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	companyLogo: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	customerName: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	customerEmail: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	customerAddress: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	customerCity: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	customerZipCode: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	customerTelephone: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	customerCountry: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	customerState: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	dueDate: {
		type: Sequelize.DATEONLY,
		allowNull: true,
	},
	tax: {
		type: Sequelize.FLOAT(5, 2),
		allowNull: true,
	},
	subTotal: {
		type: Sequelize.FLOAT(10, 2),
		allowNull: true,
	},
	notes: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	status: {
		type: Sequelize.STRING,
		defaultValue: 'Pending',
	},
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
});

Invoices.sync().then(() => {
	console.log('User Model synced');
});

module.exports = Invoices;
