'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyLicensesView = undefined;

var _BaseView = require('./BaseView');

var _WebCall = require('../logic/WebCall');

let Mustache = require('../../node_modules/mustache');

class MyLicensesView extends _BaseView.BaseView {
    constructor() {
        super(arguments);
        this.render();
    }

    render() {
        new _WebCall.WebCall({
            method: 'POST',
            url: 'http://localhost:30000/api/licenses/getMyLicenses'
        }).send({ userId: 1 }).then(licenses => {
            this.renderList(licenses);
        });
    }

    renderList(licenses) {
        var rowTemplate = document.querySelector('#' + this.defaults.itemTemplate).innerHTML;
        var result = [];
        licenses.forEach(license => {
            result.push(Mustache.render(rowTemplate, license));
        });
        this.ui.licenseList.innerHTML = result.join('');
    }
}

exports.MyLicensesView = MyLicensesView;
MyLicensesView.defaults = {
    template: 'licensesViewTemplate',
    itemTemplate: 'licenseViewItemTemplate',
    ui: {
        licenseList: '.licenseList'
    }
};

//# sourceMappingURL=MyLicensesView.js.map