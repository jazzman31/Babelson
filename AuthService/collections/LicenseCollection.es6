import {BaseCollection} from'./BaseCollection';
import {LicenseModel} from'../models/LicenseModel';

export class LicenseCollection extends BaseCollection {
    constructor() {
        let options = arguments;
        options.model = LicenseModel;
        super(options);
    }

}