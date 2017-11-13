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

var _collectionsProductCollection = require('../collections/ProductCollection');

var ProductController = (function () {
    function ProductController() {
        _classCallCheck(this, ProductController);
    }

    _createClass(ProductController, [{
        key: 'getAll',

        /**
         * Returns a simple SELECT * from all products
         * no joins with types version etc in this one
         * @returns {Promise}
         */
        value: function getAll() {
            return new Promise(function (resolve, reject) {
                new _DBController2['default']().query('call ' + _enumsStoredProcedure.StoredProcedure.PRODUCT_GET_ALL_NO_JOINS).then(function (result) {
                    resolve(result);
                }).fail(function (result) {
                    reject(result);
                });
            });
        }
    }, {
        key: 'getAllParentProducts',

        /**
         * Returns all parent products(no children for bundles)
         * @returns {Promise}
         */
        value: function getAllParentProducts() {

            var dbController = new _DBController2['default']();
            return new Promise(function (resolve, reject) {
                dbController.query('call ' + _enumsStoredProcedure.StoredProcedure.PRODUCT_GET_ALL_PARENT).then(function (sqlRet) {
                    var productCollection = new _collectionsProductCollection.ProductCollection();
                    productCollection.reset(sqlRet[0]);
                    resolve(productCollection);
                })['catch'](function (err) {
                    reject(err);
                });
            });
        }
    }]);

    return ProductController;
})();

exports.ProductController = ProductController;

//# sourceMappingURL=ProductController.js.map