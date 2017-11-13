import {BaseView} from './BaseView';
import {LoginController} from '../controllers/LoginController';

export class LoginView extends BaseView {
    constructor() {
        super(arguments);

        this.ui.button.addEventListener('click', this.onLoginClick.bind(this));
    }

    onLoginClick(e) {
        let loginController = new LoginController({
            username: this.ui.username.value,
            password: this.ui.password.value
        });

        loginController.login()
            .then((resp)=> {
                //SomeSessionHandler
                console.log('Login Cool', resp);

            })
            .catch(this.onLoginFailed.bind(this))
    }

    onLoginFailed() {
        window.eventBus.trigger('EVENT_LOGIN_FAILED');
    }
}

LoginView.defaults = {
    ui: {
        username: '#username',
        password: '#password',
        button: '#login'
    },
    template: 'loginTemplate'
};