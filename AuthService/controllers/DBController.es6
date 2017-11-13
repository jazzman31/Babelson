var mysql = require('promise-mysql');
var config = require('../config').Config;
var DBHelper = require('../helpers/DBHelper');

export default class DBController {

    constructor() {
        this.connection = null;
    }

    query(sql, params) {
        return mysql.createConnection(config.mysqlConfig)
            .then((conn)=> {
                this.connection = conn;
                let queryParams = params ? DBHelper.serializeToSpParams(params) : '';
                return this.connection.query(sql + queryParams +';')
                    .then((successRet)=> {
                        return successRet;
                    })
            })
            .catch(
                (error)=> {
                    if (this.connection && this.connection.end) {
                        console.log('invoking connection cleaning');
                        this.connection.end();
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
}


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