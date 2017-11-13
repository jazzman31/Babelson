'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const child_process = require('child_process');

class AuthEngineExec {
    static getMacAddress() {
        this.runEngine('--mac-address');
    }

    static runEngine(params) {
        return child_process.execSync('/bin/sh //Users/OferHaber/Projects/babelson/AuthEngine/content/App ' + params, { windowsHide: true });
    }
}
exports.AuthEngineExec = AuthEngineExec;

//# sourceMappingURL=AuthEngineExec.js.map