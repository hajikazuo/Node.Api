'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect('mongodb+srv://hajikazuo:ndstr@cluster0.jn6y0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const Product = require('./models/product');
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute)
app.use('/products', productRoute)

module.exports = app;

