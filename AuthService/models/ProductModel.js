"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductModel = (function () {
    function ProductModel(params) {
        _classCallCheck(this, ProductModel);

        this.productDisplayName = params.productDisplayName;
        this.productNameCode = params.productNameCode;
        this.productGuid = params.productGuid;
        this.productDescriptionCode = params.productDescriptionCode;
        this.productDescriptionText = params.productDescriptionText;
        this.productBaseImageName = params.productBaseImageName;
        this.productType = params.productType;
        this.productCategoryCode = params.productCategoryCode;
        this.productVersion = params.productVersion;
    }

    _createClass(ProductModel, [{
        key: "toJSON",
        value: function toJSON() {
            return {
                productDisplayName: this.productDisplayName,
                productNameCode: this.productNameCode,
                productGuid: this.productGuid,
                productDescriptionCode: this.productDescriptionCode,
                productDescriptionText: this.productDescriptionText,
                productBaseImageName: this.productBaseImageName,
                productType: this.productType,
                productCategoryCode: this.productCategoryCode,
                productVersion: this.productVersion
            };
        }
    }]);

    return ProductModel;
})();

exports.ProductModel = ProductModel;

//# sourceMappingURL=ProductModel.js.map