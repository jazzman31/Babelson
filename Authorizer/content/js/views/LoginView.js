'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginView = undefined;

var _BaseView = require('./BaseView');

var _LoginController = require('../controllers/LoginController');

class LoginView extends _BaseView.BaseView {
    constructor() {
        super(arguments);

        this.ui.button.addEventListener('click', this.onLoginClick.bind(this));
    }

    onLoginClick(e) {
        let loginController = new _LoginController.LoginController({
            username: this.ui.username.value,
            password: this.ui.password.value
        });

        loginController.login().then(resp => {
            //SomeSessionHandler
            console.log('Login Cool', resp);
        }).catch(this.onLoginFailed.bind(this));
    }

    onLoginFailed() {
        window.eventBus.trigger('EVENT_LOGIN_FAILED');
    }
}

exports.LoginView = LoginView;
LoginView.defaults = {
    ui: {
        username: '#username',
        password: '#password',
        button: '#login'
    },
    template: 'loginTemplate'
};

//# sourceMappingURL=LoginView.js.map