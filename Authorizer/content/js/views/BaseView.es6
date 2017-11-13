export class BaseView {
    constructor(options) {
        options = options[0] || options;
        this.el = options.el;
        this.el = this.getEl();
        this.el.style='filter: blur(100px); transition: 1s;';
        this.model = options.model;
        this.ui = {};
        if (this.hasDefaults()) {
            this.defaults = this.getDefaults();
            if (this.defaults['template']) {
                new Template(this.defaults['template']).render(this.model, this.el);
            }
            if (this.defaults['ui']) {
                Object.entries(this.defaults['ui']).forEach((uiSelectorObj)=> {
                    this.ui[uiSelectorObj[0]] = this.el.querySelector(uiSelectorObj[1]);
                });
            }
        }
        setTimeout(()=>{
            this.el.style='filter: blur(00px); transition: 0.2s;';
        },100);

    }

    hasDefaults() {
        return Object.keys(this.getDefaults() || {}).length;
    }

    getDefaults() {
        return this.constructor.defaults;
    }

    render() {

    }

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
        }
        catch (e) {
            return false;
        }
        return true;
    }

}