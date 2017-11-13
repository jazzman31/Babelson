'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupFactory = undefined;

var _PopupView = require('../views/PopupView');

class PopupFactory {
    constructor(options) {}

    pop(name, params) {
        return new _PopupView.PopupView({
            content: this.document.querySelector('#${name}PopupTemplate').innerHTML
        });
    }
}
exports.PopupFactory = PopupFactory;

//# sourceMappingURL=PopupFactory.js.map