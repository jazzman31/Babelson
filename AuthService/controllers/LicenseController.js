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

var _collectionsLicenseCollection = require('../collections/LicenseCollection');

var LicenseController = (function () {
    function LicenseController() {
        _classCallCheck(this, LicenseController);
    }

    _createClass(LicenseController, [{
        key: 'getLicenseCollectionByUserId',

        /**
         * Returns a simple SELECT * from all products
         * no joins with types version etc in this one
         * @returns {Promise} / LicenseCollection
         */
        value: function getLicenseCollectionByUserId(params) {
            var dbController = new _DBController2['default']();
            return new Promise(function (resolve, reject) {
                dbController.query('call ' + _enumsStoredProcedure.StoredProcedure.LICENSE_GET_LICENSES_BY_USER_ID, params).then(function (sqlRet) {
                    var licenseCollection = new _collectionsLicenseCollection.LicenseCollection();
                    licenseCollection.reset(sqlRet[0]);
                    resolve(licenseCollection);
                })['catch'](function (err) {
                    reject(err);
                });
            });
        }
    }]);

    return LicenseController;
})();

exports.LicenseController = LicenseController;

//# sourceMappingURL=LicenseController.js.map