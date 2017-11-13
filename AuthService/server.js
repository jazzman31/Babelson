/***
 * Auth service
 ***/
'use strict';

var _config = require('./config');

var _webroutesConfig = require('./webroutes-Config');

var _routeHandler = require('./routeHandler');

var express = require('express');
var session = require('express-session');
var process = require('process');
var bodyParser = require('body-parser');

/**
 * MAIN
 */
console.log('constructing server with the following: ', _config.Config);

global.app = express();
process.on('exit', function () {
  var oneOfThem = global.server || global.app;
  if (oneOfThem) {
    console.log('Process quiting. trying to close server');
    oneOfThem.close();
  }
});

global.webRoutes = new _webroutesConfig.WebRoutes();

/*    global.app.set('trust proxy', 1); // Check this and whats the meaning
 console.log('starting session manager with options:', Config.sessionConfig);
 global.app.use(session(Config.sessionConfig));
 */
global.app.use(bodyParser.json()); // to support JSON-encoded bodies
global.app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

(0, _routeHandler.routeHandler)(global.app, global.webRoutes.getRoutes());

global.app.listen(_config.Config.port);
console.log('listening on port:' + _config.Config.port);

//# sourceMappingURL=server.js.map