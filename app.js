const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const infoRouter = require('./routes/info');
const productsRouter = require('./routes/products');
const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/info', infoRouter);
app.use('/products', productsRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);

module.exports = app;
