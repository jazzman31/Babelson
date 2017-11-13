'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _DBController = require('./DBController');

var _DBController2 = _interopRequireDefault(_DBController);

var _enumsStoredProcedure = require('../enums/StoredProcedure');

var _modelsRequestLoginRequestModel = require('../models/request/LoginRequestModel');

var _modelsUserModel = require('../models/UserModel');

var UserController = (function () {
    function UserController() {
        _classCallCheck(this, UserController);
    }

    _createClass(UserController, [{
        key: 'getUserByEmail',
        value: function getUserByEmail(params) {
            return new Promise(function (resolve, reject) {
                var dbController = new _DBController2['default']();
                dbController.query('call ' + _enumsStoredProcedure.StoredProcedure.USER_LOGIN, params).then(function (result) {
                    resolve(result);
                }).fail(function (result) {
                    reject(result);
                });
            });
        }
    }, {
        key: 'login',
        value: function login(params) {
            var dbController = new _DBController2['default']();
            return new Promise(function (resolve, reject) {
                dbController.query('call ' + _enumsStoredProcedure.StoredProcedure.USER_LOGIN, params).then(function (sqlRet) {
                    resolve(new _modelsUserModel.UserModel(sqlRet[0][0]));
                })['catch'](function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: 'register',
        value: function register(params) {
            return new Promise(function (resolve, reject) {
                new _DBController2['default']().query('call ' + _enumsStoredProcedure.StoredProcedure.USER_REGISTER, params).then(function (result) {
                    resolve(result);
                }).fail(function (result) {
                    reject(result);
                });
            });
        }
    }]);

    return UserController;
})();

exports.UserController = UserController;

//# sourceMappingURL=UserController.js.map