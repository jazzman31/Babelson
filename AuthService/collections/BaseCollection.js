"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseCollection = (function () {
    function BaseCollection(options) {
        _classCallCheck(this, BaseCollection);

        this.options = options;
        this.modelClass = this.options.model;
        this.models = [];
    }

    _createClass(BaseCollection, [{
        key: "reset",
        value: function reset(data) {
            var _this = this;

            this.models.length = 0;
            data.forEach(function (jsonModel) {
                _this.models.push(new _this.modelClass(jsonModel));
            });
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            var result = [];
            this.models.forEach(function (model) {
                result.push(model.toJSON());
            });
            return result;
        }
    }, {
        key: "forEach",
        value: function forEach(callback) {
            this.models.forEach(function (model) {
                callback(model);
            });
        }
    }]);

    return BaseCollection;
})();

exports.BaseCollection = BaseCollection;

//# sourceMappingURL=BaseCollection.js.map