import {WebCall} from '../logic/WebCall';
import {AuthEngineExec} from '../logic/AuthEngineExec';
export class LoginController {
    constructor(options) {
        this._credentials = options.credentials;
    }

    login(userCredentials) {
        userCredentials.deviceId = AuthEngineExec.getMacAddress();

        return new Promise((resolve, reject)=> {
            let webCall = new WebCall({
                method: "POST",
                url: "http://localhost:30000/api/user/login",
            });

            webCall.send(userCredentials)
                .then((resp)=> {
                    if (resp.success && resp.success == false || resp.statusCode >= 400) {
                        reject();
                    } else {
                        if (resp.success) {
                            resolve(JSON.stringify(resp).data);
                        }
                    }
                });
        });
    }

    logout(sessionCredentials) {

    }

    get credentials() {
        return this._credentials;
    }

    set credentials(credentials) {
        this._credentials = credentials;
    }
}