import DBController from './DBController';
import {StoredProcedure} from '../enums/StoredProcedure';
import {ProductCollection} from '../collections/ProductCollection';

export class ProductController {
    constructor() {
    }

    /**
     * Returns a simple SELECT * from all products
     * no joins with types version etc in this one
     * @returns {Promise}
     */
    getAll() {
        return new Promise((resolve, reject) => {
            new DBController().query(`call ${StoredProcedure.PRODUCT_GET_ALL_NO_JOINS}`)
                .then((result)=> {
                    resolve(result)
                })
                .fail((result)=> {
                    reject(result)
                });
        });
    }

    /**
     * Returns all parent products(no children for bundles)
     * @returns {Promise}
     */
    getAllParentProducts() {

        let dbController = new DBController();
        return new Promise((resolve, reject) => {
            dbController.query(`call ${StoredProcedure.PRODUCT_GET_ALL_PARENT}`)
                .then((sqlRet)=> {
                    let productCollection = new ProductCollection();
                    productCollection.reset(sqlRet[0]);
                    resolve(productCollection);
                })
                .catch((err)=> {
                    reject(err)
                });
        });
    }
}