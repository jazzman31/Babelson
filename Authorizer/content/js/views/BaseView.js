'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseView = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BaseView {
    constructor(options) {
        options = options[0] || options;
        this.el = options.el;
        this.el = this.getEl();
        this.el.style = 'filter: blur(100px); transition: 1s;';
        this.model = options.model;
        this.ui = {};
        if (this.hasDefaults()) {
            this.defaults = this.getDefaults();
            if (this.defaults['template']) {
                new Template(this.defaults['template']).render(this.model, this.el);
            }
            if (this.defaults['ui']) {
                (0, _entries2.default)(this.defaults['ui']).forEach(uiSelectorObj => {
                    this.ui[uiSelectorObj[0]] = this.el.querySelector(uiSelectorObj[1]);
                });
            }
        }
        setTimeout(() => {
            this.el.style = 'filter: blur(00px); transition: 0.2s;';
        }, 100);
    }

    hasDefaults() {
        return (0, _keys2.default)(this.getDefaults() || {}).length;
    }

    getDefaults() {
        return this.constructor.defaults;
    }

    render() {}

    getEl() {
        let result = document.body;
        if (this.isDomEl(this.el)) {
            result = this.el;
        } else {
            let selectedDomEl = document.querySelector(this.el) || document.querySelector('#' + this.el) || document.querySelector('.' + document.querySelector('#' + this.el));
            if (selectedDomEl) {
                result = selectedDomEl;
            }
        }
        return result;
    }

    isDomEl(obj) {
        var elm = document.createElement('div');
        try {
            elm.appendChild(obj);
        } catch (e) {
            return false;
        }
        return true;
    }

}
exports.BaseView = BaseView;

//# sourceMappingURL=BaseView.js.map