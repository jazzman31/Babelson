import {BaseView} from './BaseView';

export class HeaderView extends BaseView {
    constructor() {
        super(arguments);
    }
}

HeaderView.defaults = {
    template: 'headerTemplate'
};