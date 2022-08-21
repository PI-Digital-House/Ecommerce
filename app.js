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

//render public paste
app.use('/views', express.static(path.resolve(__dirname, 'views')));
app.use('/public', express.static(path.resolve(__dirname, 'public')));
app.use('/javascripts', express.static(path.resolve(__dirname, 'javascripts')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/customer', customerRouter);
app.use('/', homeRouter);
app.use('/adm', admRouter);


app.disable('etag');



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
