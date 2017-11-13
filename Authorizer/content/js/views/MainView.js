'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainView = undefined;

var _BaseView = require('./BaseView');

var _LoginController = require('../controllers/LoginController');

var _LoginView = require('./LoginView');

var _ProductsView = require('./ProductsView');

var _MyLicensesView = require('./MyLicensesView');

var _PopupView = require('./PopupView');

const Store = require('electron-store');
const store = new Store();

class MainView {
    constructor() {

        /**
         * Check if user is already remember on the computer
         * if so perform login and move to the licenses management
         *
         * if not show login page
         *
         */

        /* let userCredentials = this.fetchUserCredentialsFromStore();
         if (userCredentials) {
             this.loginController = new LoginController();
             this.loginController.login(userCredentials);
         }
         else {
             this.loginView = new LoginView({
                 el: '#content'
             });
         }*/

        /*
         this.productsView = new ProductsView({
         el: '#content'
         });*/

        /*  new PopupView({
         el: '#content',
         content: '<h1>big thing</h1><div>hello</div>'
         })*/

        /*     new MyLicensesView({
         el: '#content'
         })*/
    }

    fetchUserCredentialsFromStore() {
        return store.get('Babelson.Authorizer.rememberMeCredentials');

        /*      store.set('unicorn', '🦄');
         console.log(store.get('unicorn'));
         //=> '🦄'
          // Use dot-notation to access nested properties
         store.set('foo.bar', true);
         console.log(store.get('foo'));
         //=> {bar: true}
          store.delete('unicorn');
         console.log(store.get('unicorn'));
         //=> undefined
          }*/
    }
}
exports.MainView = MainView;

//# sourceMappingURL=MainView.js.map