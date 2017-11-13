'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginController = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _WebCall = require('../logic/WebCall');

var _AuthEngineExec = require('../logic/AuthEngineExec');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LoginController {
    constructor(options) {
        this._credentials = options.credentials;
    }

    login(userCredentials) {
        userCredentials.deviceId = _AuthEngineExec.AuthEngineExec.getMacAddress();

        return new _promise2.default((resolve, reject) => {
            let webCall = new _WebCall.WebCall({
                method: "POST",
                url: "http://localhost:30000/api/user/login"
            });

            webCall.send(userCredentials).then(resp => {
                if (resp.success && resp.success == false || resp.statusCode >= 400) {
                    reject();
                } else {
                    if (resp.success) {
                        resolve((0, _stringify2.default)(resp).data);
                    }
                }
            });
        });
    }

    logout(sessionCredentials) {}

    get credentials() {
        return this._credentials;
    }

    set credentials(credentials) {
        this._credentials = credentials;
    }
}
exports.LoginController = LoginController;

//# sourceMappingURL=LoginController.js.map