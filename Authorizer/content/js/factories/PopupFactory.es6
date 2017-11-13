import {PopupView} from '../views/PopupView';
export class PopupFactory {
    constructor(options) {

    }

    pop(name, params) {
        return new PopupView({
            content: this.document.querySelector('#${name}PopupTemplate').innerHTML
        })
    }
}

