import DBController from './DBController';
import {StoredProcedure} from '../enums/StoredProcedure';
import {LicenseCollection} from '../collections/LicenseCollection';

export class LicenseController {
    constructor() {
    }

    /**
     * Returns a simple SELECT * from all products
     * no joins with types version etc in this one
     * @returns {Promise} / LicenseCollection
     */
    getLicenseCollectionByUserId(params) {
        let dbController = new DBController();
        return new Promise((resolve, reject)=> {
            dbController.query(`call ${StoredProcedure.LICENSE_GET_LICENSES_BY_USER_ID}`, params)
                .then((sqlRet)=> {
                    let licenseCollection = new LicenseCollection();
                    licenseCollection.reset(sqlRet[0]);
                    resolve(licenseCollection);
                })
                .catch((err)=> {
                    reject(err)
                });
        });
    }
}