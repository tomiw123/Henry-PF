const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const routes = require('./Routes/index.js');
const cors = require('cors');
const morgan = require('morgan');
require ('dotenv').config();

require('./connection');



app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.URL);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use("/", routes);


module.exports = app;
