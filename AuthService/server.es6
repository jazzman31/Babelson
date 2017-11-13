/***
 * Auth service
 ***/
import {Config} from './config';
import {WebRoutes} from './webroutes-Config';
import {routeHandler} from './routeHandler';

var express = require('express');
var session = require('express-session');
var process = require('process');
var bodyParser = require('body-parser');


/**
 * MAIN
 */
console.log('constructing server with the following: ', Config);

global.app = express();
process.on('exit', ()=> {
    let oneOfThem = global.server || global.app;
    if (oneOfThem) {
        console.log('Process quiting. trying to close server');
        oneOfThem.close();
    }
});

global.webRoutes = new WebRoutes();


/*    global.app.set('trust proxy', 1); // Check this and whats the meaning
 console.log('starting session manager with options:', Config.sessionConfig);
 global.app.use(session(Config.sessionConfig));
 */
global.app.use(bodyParser.json());       // to support JSON-encoded bodies
global.app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

routeHandler(global.app, global.webRoutes.getRoutes());


global.app.listen(Config.port);
console.log('listening on port:' + Config.port);

