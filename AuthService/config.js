/**
 * Config class
 * contains configuration to all services.
 *
 * TODO: Decouple different components to different files in the sake of state management
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var Config = {
    port: 30000,
    /**
     * Session config
     */
    sessionConfig: {
        secret: 'BABELBABEL',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    },

    /***
     * MYSQL
     */
    mysqlConfig: {
        host: 'localhost',
        user: 'root',
        password: 'x1b5p9!',
        database: 'Babelson',
        port: 3306
    },
    /**
     * MAILER
     */
    mailerConfig: {
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        }
    },
    mailerDefaultOptions: {
        from: 'youremail@gmail.com',
        to: 'myfriend@yahoo.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    }
};
exports.Config = Config;

//# sourceMappingURL=config.js.map