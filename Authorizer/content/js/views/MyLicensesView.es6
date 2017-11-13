import {BaseView} from './BaseView';
import {WebCall} from '../logic/WebCall';
let Mustache = require('../../node_modules/mustache');

export class MyLicensesView extends BaseView {
    constructor() {
        super(arguments);
        this.render();
    }

    render() {
        new WebCall
        ({
            method: 'POST',
            url: 'http://localhost:30000/api/licenses/getMyLicenses'
        })
            .send({userId: 1})
            .then((licenses) => {
                this.renderList(licenses);
            });
    }

    renderList(licenses) {
        var rowTemplate = document.querySelector('#' + this.defaults.itemTemplate).innerHTML;
        var result = [];
        licenses.forEach((license)=> {
            result.push(Mustache.render(rowTemplate, license));
        });
        this.ui.licenseList.innerHTML = result.join('');
    }
}

MyLicensesView.defaults = {
    template: 'licensesViewTemplate',
    itemTemplate: 'licenseViewItemTemplate',
    ui: {
        licenseList: '.licenseList'
    }
};