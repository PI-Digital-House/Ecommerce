
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var profileRouter = require('./routes/profile');
var cartRouter = require('./routes/cart');
var productsRouter = require('./routes/products')
var signInRouter = require('./routes/signin')
var signUpRouter = require('./routes/signup')
var registerProducts = require('./routes/registerProducts')
const createError = require('http-errors');
const express = require('express');
const sequelize = require('sequelize')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const customerRouter = require('./routes/customer');
const homeRouter = require('./routes/home')
const admRouter = require('./routes/adm')


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/profile', profileRouter);
app.use('/cart', cartRouter);
app.use('/products', productsRouter);
app.use('/signin', signInRouter);
app.use('/signup', signUpRouter);
app.use('/registerProducts', registerProducts);
app.use('/customer', customerRouter);
app.use('/', homeRouter);
app.use('/adm', admRouter);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
