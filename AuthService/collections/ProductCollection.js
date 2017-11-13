'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _BaseCollection2 = require('./BaseCollection');

var _modelsProductModel = require('../models/ProductModel');

var ProductCollection = (function (_BaseCollection) {
    function ProductCollection() {
        _classCallCheck(this, ProductCollection);

        var options = arguments;
        options.model = _modelsProductModel.ProductModel;
        _get(Object.getPrototypeOf(ProductCollection.prototype), 'constructor', this).call(this, options);
    }

    _inherits(ProductCollection, _BaseCollection);

    return ProductCollection;
})(_BaseCollection2.BaseCollection);

exports.ProductCollection = ProductCollection;

//# sourceMappingURL=ProductCollection.js.map