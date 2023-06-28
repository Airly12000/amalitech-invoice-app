const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const Invoices = require('../api/routes/Invoices');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../', '.env') });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

process.env.NODE_ENV = 'production';

// Express Routes
app.use('/api/routes', Invoices);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));

module.exports.handler = serverless(app);
