/**
 * Controller imports
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _controllersUserController = require('./controllers/UserController');

var _controllersProductController = require('./controllers/ProductController');

var _controllersLicenseController = require('./controllers/LicenseController');

/**
 * Request model imports
 */

var _modelsRequestEmptyRequestModel = require('./models/request/EmptyRequestModel');

var _modelsRequestLoginRequestModel = require('./models/request/LoginRequestModel');

var _modelsRequestMyLicensesRequestModel = require('./models/request/MyLicensesRequestModel');

/**
 * Response model imports
 */

var _modelsResponseMyLicensesResponseModel = require('./models/response/MyLicensesResponseModel');

/**
 * WEB ROUTES
 */

var WebRoutes = (function () {
    function WebRoutes() {
        _classCallCheck(this, WebRoutes);

        console.log('creating webroutes');

        this.routes = [
        /**
         * User controller
         */
        {
            url: '/api/user/login',
            method: 'post',
            controllerClass: _controllersUserController.UserController,
            action: 'login',
            requestModel: _modelsRequestLoginRequestModel.LoginRequestModel,
            parsingFunction: 'getDbParams'
        },
        /**
         * Product controller
         */
        {
            url: '/api/products/getAllParent',
            method: 'post',
            controllerClass: _controllersProductController.ProductController,
            action: 'getAllParentProducts',
            requestModel: _modelsRequestEmptyRequestModel.EmptyRequestModel,
            parsingFunction: 'getDbParams'
        },
        /**
         * Licenses controller
         */
        {
            url: '/api/licenses/getMyLicenses',
            method: 'post',
            controllerClass: _controllersLicenseController.LicenseController,
            action: 'getLicenseCollectionByUserId',
            requestModel: _modelsRequestMyLicensesRequestModel.MyLicensesRequestModel,
            responseModel: _modelsResponseMyLicensesResponseModel.MyLicensesResponseModel,
            parsingFunction: 'getDbParams'
        }];
    }

    _createClass(WebRoutes, [{
        key: 'getRoutes',
        value: function getRoutes() {
            return this.routes;
        }
    }]);

    return WebRoutes;
})();

exports.WebRoutes = WebRoutes;

//# sourceMappingURL=webroutes-config.js.map