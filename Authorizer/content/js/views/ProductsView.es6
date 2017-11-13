import {BaseView} from './BaseView';
import {WebCall} from '../logic/WebCall';
let Mustache = require('../../node_modules/mustache');

export class ProductsView extends BaseView {
    constructor() {
        super(arguments);

        /*
         this.ui.getProductsBtn.addEventListener('click', this.onFetchClick.bind(this));
         */
        this.render();
    }

    render() {
        new WebCall
        ({
            method: 'POST',
            url: 'http://localhost:30000/api/products/getAllParent'
        })
            .send()
            .then((products) => {
                this.renderList(products);
            });

    }

    renderList(products) {
        var rowTemplate = document.querySelector('#' + this.defaults.itemTemplate).innerHTML;
        var result = [];
        products.forEach((product)=> {
            result.push(Mustache.render(rowTemplate, product));
        });
        this.ui.productList.innerHTML = result.join('');
    }
}

ProductsView.defaults = {
    template: 'productsViewTemplate',
    itemTemplate: 'productsViewItemTemplate',
    ui: {
        productList: '.productList'
    }
};