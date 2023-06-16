const express = require('express');
const Invoices = require('../../models/Invoices');
const Items = require('../../models/Items');

const router = express.Router();

Invoices.hasMany(Items);
Items.belongsTo(Invoices);

const errorHandler = (error) => {
	console.log(`Error : ${error}`);
};

router.get('/getInvoices', async (req, res) => {
	const invoices = await Invoices.findAll().catch(errorHandler);
	if (invoices) {
		res.json({ invoices });
	} else {
		res.json({ message: 'Request Failed' });
	}
});

router.get('/getInvoiceItems/:invoiceId', async (req, res) => {
	const invoiceId = req.params.invoiceId;
	const invoiceItems = await Invoices.findAll({
		where: {
			invoiceId: invoiceId,
		},
		include: {
			model: Items,
			required: false,
		},
	}).catch(errorHandler);
	if (invoiceItems) {
		res.json({ invoiceItems });
	} else {
		res.json({ message: 'Request Failed' });
	}
});

router.post('/post', async (req, res) => {
	const body = req.body;
	const items = body.items;
	await Invoices.create({
		invoiceId: body.invoiceId,
		companyName: body.companyName,
		companyEmail: body.companyEmail,
		companyAddress: body.companyAddress,
		companyCity: body.companyCity,
		companyZipCode: body.companyZipCode,
		companyTelephone: body.companyTelephone,
		companyCountry: body.companyCountry,
		companyState: body.companyState,
		companyLogo: body.companyLogo,
		customerName: body.customerName,
		customerEmail: body.customerEmail,
		customerAddress: body.customerAddress,
		customerCity: body.customerCity,
		customerZipCode: body.customerZipCode,
		customerTelephone: body.customerTelephone,
		customerCountry: body.customerCountry,
		customerState: body.customerState,
		dueDate: body.dueDate,
		tax: body.tax,
		subTotal: body.subTotal,
		status: body.status,
		notes: body.notes,
	}).catch(errorHandler);
	if (items.length > 1) {
		items.map(async (item) => {
			await Items.create({
				invoiceInvoiceId: body.invoiceId,
				itemName: item.itemName,
				itemDescription: item.itemDescription,
				itemQuantity: item.itemQuantity,
				itemPrice: item.itemPrice,
				itemAmount: item.itemAmount,
			}).catch(errorHandler);
		});
	} else if (items.length === 1) {
		const item = items[0];
		await Items.create({
			invoiceInvoiceId: body.invoiceId,
			itemName: item.itemName,
			itemDescription: item.itemDescription,
			itemQuantity: item.itemQuantity,
			itemPrice: item.itemPrice,
			itemAmount: item.itemAmount,
		}).catch(errorHandler);
	}
	res.json({ message: 'Invoice created!' });
});

router.put('/updateInvoice/:invoiceId', async (req, res) => {
	const body = req.body;
	const items = body.items;
	const invoiceId = req.params.invoiceId;
	await Items.destroy({
		where: {
			invoiceInvoiceId: invoiceId,
		},
	}).catch(errorHandler);
	await Invoices.update(
		{
			companyName: body.companyName,
			companyEmail: body.companyEmail,
			companyAddress: body.companyAddress,
			companyCity: body.companyCity,
			companyZipCode: body.companyZipCode,
			companyTelephone: body.companyTelephone,
			companyCountry: body.companyCountry,
			companyState: body.companyState,
			companyLogo: body.companyLogo,
			customerName: body.customerName,
			customerEmail: body.customerEmail,
			customerAddress: body.customerAddress,
			customerCity: body.customerCity,
			customerZipCode: body.customerZipCode,
			customerTelephone: body.customerTelephone,
			customerCountry: body.customerCountry,
			customerState: body.customerState,
			dueDate: body.dueDate,
			tax: body.tax,
			subTotal: body.subTotal,
			status: body.status,
			notes: body.notes,
		},
		{ where: { invoiceId: invoiceId } }
	).catch(errorHandler);
	if (items.length > 1) {
		items.map(async (item) => {
			await Items.create({
				invoiceInvoiceId: body.invoiceId,
				itemName: item.itemName,
				itemDescription: item.itemDescription,
				itemQuantity: item.itemQuantity,
				itemPrice: item.itemPrice,
				itemAmount: item.itemAmount,
			}).catch(errorHandler);
		});
	} else if (items.length === 1) {
		const item = items[0];
		await Items.create({
			invoiceInvoiceId: body.invoiceId,
			itemName: item.itemName,
			itemDescription: item.itemDescription,
			itemQuantity: item.itemQuantity,
			itemPrice: item.itemPrice,
			itemAmount: item.itemAmount,
		}).catch(errorHandler);
	}
	res.json({ message: 'Invoice updated!' });
});

router.put('/markPaid/:invoiceId', async (req, res) => {
	const invoiceId = req.params.invoiceId;
	await Invoices.update(
		{
			status: 'Paid',
		},
		{ where: { invoiceId: invoiceId } }
	).catch(errorHandler);

	res.json({ message: 'Invoice updated!' });
});

router.delete('/deleteInvoice/:invoiceId', async (req, res) => {
	const invoiceId = req.params.invoiceId;
	await Invoices.destroy({
		where: {
			invoiceId: invoiceId,
		},
	}).catch(errorHandler);
	await Items.destroy({
		where: {
			invoiceInvoiceId: invoiceId,
		},
	}).catch(errorHandler);
	res.json({ message: 'Invoice deleted!' });
});

module.exports = router;
