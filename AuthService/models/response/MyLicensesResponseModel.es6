import {ResponseModel} from './ResponseModel';
var _ = require('underscore');
export class MyLicensesResponseModel extends ResponseModel {
    constructor() {
        super(arguments[0]);
    }

    toJSON() {
        var result = [];
        this.data.forEach((model)=> {
            result.push(_.pick(model, [
                'productGuid',
                'productNameCode',
                'productDisplayName',
                'productVersion',
                'productType',
                'productDescriptionCode',
                'productDescriptionText',
                'productBaseImageName',
                'licenseType',
                'licenseStatus',
                'deviceName',
                'deviceKeyString',
                'deviceType'
            ]));
        });

        return {
            success: this.success,
            data: result
        }
    }
}
