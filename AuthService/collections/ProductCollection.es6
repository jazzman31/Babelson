import {BaseCollection} from'./BaseCollection';
import {ProductModel} from'../models/ProductModel';

export class ProductCollection extends BaseCollection {
    constructor() {
        let options = arguments;
        options.model = ProductModel;
        super(options);
    }

}