<<<<<<< HEAD
const express = require('express');
const app = express();
const routes = require('./Routes/index.js');
const cors = require('cors');
const morgan = require('morgan');

require('./connection')
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use('/', routes);
=======
const express = require("express");
const app = express();
const routes = require("./Routes/index.js");
const cors = require("cors");
const morgan = require("morgan");

require("./connection");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
>>>>>>> 9c42fbcbe36f60f6727c97b91ef8a38c5e984078

app.use("/", routes);

module.exports = app;
