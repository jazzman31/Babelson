'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductsView = undefined;

var _BaseView = require('./BaseView');

var _WebCall = require('../logic/WebCall');

let Mustache = require('../../node_modules/mustache');

class ProductsView extends _BaseView.BaseView {
    constructor() {
        super(arguments);

        /*
         this.ui.getProductsBtn.addEventListener('click', this.onFetchClick.bind(this));
         */
        this.render();
    }

    render() {
        new _WebCall.WebCall({
            method: 'POST',
            url: 'http://localhost:30000/api/products/getAllParent'
        }).send().then(products => {
            this.renderList(products);
        });
    }

    renderList(products) {
        var rowTemplate = document.querySelector('#' + this.defaults.itemTemplate).innerHTML;
        var result = [];
        products.forEach(product => {
            result.push(Mustache.render(rowTemplate, product));
        });
        this.ui.productList.innerHTML = result.join('');
    }
}

exports.ProductsView = ProductsView;
ProductsView.defaults = {
    template: 'productsViewTemplate',
    itemTemplate: 'productsViewItemTemplate',
    ui: {
        productList: '.productList'
    }
};

//# sourceMappingURL=ProductsView.js.map