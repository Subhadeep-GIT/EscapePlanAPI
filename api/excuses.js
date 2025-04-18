const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const excuseRoutes = require('../routes/excuseRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/excuses', excuseRoutes);

module.exports = app;
module.exports.handler = serverless(app);