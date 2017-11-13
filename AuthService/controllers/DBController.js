'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var mysql = require('promise-mysql');
var config = require('../config').Config;
var DBHelper = require('../helpers/DBHelper');

var DBController = (function () {
    function DBController() {
        _classCallCheck(this, DBController);

        this.connection = null;
    }

    _createClass(DBController, [{
        key: 'query',
        value: function query(sql, params) {
            var _this = this;

            return mysql.createConnection(config.mysqlConfig).then(function (conn) {
                _this.connection = conn;
                var queryParams = params ? DBHelper.serializeToSpParams(params) : '';
                return _this.connection.query(sql + queryParams + ';').then(function (successRet) {
                    return successRet;
                });
            })['catch'](function (error) {
                if (_this.connection && _this.connection.end) {
                    console.log('invoking connection cleaning');
                    _this.connection.end();
                    //logs out the error
                    console.log(error);
                    return error;
                }
            });
        }

        /*constructor() {
         this.config = config.Config;
         this.connection = mysql.createConnection(this.config.mysqlConfig);
         }
          query(sql, args) {
         return new Promise(function(resolve, reject) {
         this.connection.query(sql, args, (err, rows) => {
         this.close();
         if (err) {
         reject(err);
         } else {
         resolve(rows);
         }
         });
         }.bind(this));
         }
          close() {
         return new Promise((resolve, reject) => {
         this.connection.end(err => {
         if (err) {
         return reject(err)
         } else {
         resolve();
         }
         });
         });
         }*/

    }]);

    return DBController;
})();

exports['default'] = DBController;
module.exports = exports['default'];

/**
 *
 * let someRows, otherRows;
 database.query( 'SELECT * FROM some_table' )
 .then( rows => {
        someRows = rows;
        return database.query( 'SELECT * FROM other_table' );
    } )
 .then( rows => {
        otherRows = rows;
        return database.close();
    }, err => {
        return database.close().then( () => { throw err; } )
    } )
 .then( () => {
        // do something with someRows and otherRows
    }
 .catch( err => {
        // handle the error
    } )

 */

//# sourceMappingURL=DBController.js.map