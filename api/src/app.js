const express = require('express');
const app = express(); 
const routes = require('./Routes/index.js');
const cors = require('cors');
const morgan = require('morgan');

require('./connection')
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));
//hola
app.use('/', routes);

module.exports = app; 