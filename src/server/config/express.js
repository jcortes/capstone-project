/**
 * Express configuration
 */

'use strict';

var express = require('express');
//var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./env');

module.exports = function(app) {
  var env = app.get('env');
  
  app.set('views', config.root + '/src/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  
  if ('production' === env) {
//    app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
      // minification option
//    app.use(express.static(path.join(config.root, 'public')));
//    app.set('appPath', config.root + '/public');
      
    app.use(express.static(path.join(config.root, 'src/client')));
    app.use(express.static(config.root));
    app.set('appPath', 'src/client');
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }

  if ('development' === env || 'test' === env) {
    app.use(require('connect-livereload')());
    
    app.use(express.static(path.join(config.root, 'src/client')));
    app.use(express.static(config.root));
    app.use(express.static(path.join(config.root, 'tmp')));
      
    app.set('appPath', 'src/client');
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};