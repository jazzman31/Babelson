/**
 * Controller imports
 */
import {UserController} from './controllers/UserController';
import {ProductController} from './controllers/ProductController';
import {LicenseController} from './controllers/LicenseController';

/**
 * Request model imports
 */
import {EmptyRequestModel} from './models/request/EmptyRequestModel';
import {LoginRequestModel} from './models/request/LoginRequestModel';
import {MyLicensesRequestModel} from './models/request/MyLicensesRequestModel';

/**
 * Response model imports
 */
import {MyLicensesResponseModel} from './models/response/MyLicensesResponseModel';

/**
 * WEB ROUTES
 */
export class WebRoutes {
    constructor() {
        console.log('creating webroutes');

        this.routes =
            [
                /**
                 * User controller
                 */
                {
                    url: '/api/user/login',
                    method: 'post',
                    controllerClass: UserController,
                    action: 'login',
                    requestModel: LoginRequestModel,
                    parsingFunction: 'getDbParams'
                },
                /**
                 * Product controller
                 */
                {
                    url: '/api/products/getAllParent',
                    method: 'post',
                    controllerClass: ProductController,
                    action: 'getAllParentProducts',
                    requestModel: EmptyRequestModel,
                    parsingFunction: 'getDbParams'
                },
                /**
                 * Licenses controller
                 */
                {
                    url: '/api/licenses/getMyLicenses',
                    method: 'post',
                    controllerClass: LicenseController,
                    action: 'getLicenseCollectionByUserId',
                    requestModel: MyLicensesRequestModel,
                    responseModel: MyLicensesResponseModel,
                    parsingFunction: 'getDbParams'
                }


            ];
    }

    getRoutes() {
        return this.routes;
    }
}