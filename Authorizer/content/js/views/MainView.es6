import {BaseView} from './BaseView';
import {LoginController} from '../controllers/LoginController';
import {LoginView} from './LoginView';
import {ProductsView} from './ProductsView';
import {MyLicensesView} from './MyLicensesView';
import {PopupView} from './PopupView';

const Store = require('electron-store');
const store = new Store();

export class MainView  {
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
