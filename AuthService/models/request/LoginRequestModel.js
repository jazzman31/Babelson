"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginRequestModel = (function () {
    function LoginRequestModel(params) {
        _classCallCheck(this, LoginRequestModel);

        this.username = params.username;
        this.password = params.password;
        this.deviceId = params.deviceId;
    }

    _createClass(LoginRequestModel, [{
        key: "getDbParams",
        value: function getDbParams() {
            return {
                userName: this.username,
                passwordHash: this.password,
                deviceId: this.deviceId
            };
        }
    }]);

    return LoginRequestModel;
})();

exports.LoginRequestModel = LoginRequestModel;

//# sourceMappingURL=LoginRequestModel.js.map