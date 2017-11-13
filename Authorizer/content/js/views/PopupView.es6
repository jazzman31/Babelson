import {BaseView} from './BaseView';

export class PopupView extends BaseView {
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


PopupView.defaults = {
    template: 'popupTemplate',
    ui: {
        popupContent: '.popupContent',
        closeButton: '.closePopup'
    }
};