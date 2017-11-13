'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupView = undefined;

var _BaseView = require('./BaseView');

class PopupView extends _BaseView.BaseView {
    constructor(options) {
        super(arguments);
        this.options = options;
        this.content = this.options.content || 'No content';
        this.open(this.content);
    }

    open(popupContent) {
        this.el.querySelector('.popupOverlay').querySelector('.popupContent').innerHTML = popupContent;
        this.ui.closeButton.addEventListener('click', this.close.bind(this));
    }

    close() {
        let thisEl = document.querySelector('.popupOverlay');
        thisEl.parentNode.removeChild(thisEl);
    }
}

exports.PopupView = PopupView;
PopupView.defaults = {
    template: 'popupTemplate',
    ui: {
        popupContent: '.popupContent',
        closeButton: '.closePopup'
    }
};

//# sourceMappingURL=PopupView.js.map