export class LoginRequestModel {
    constructor(params) {
        this.username = params.username;
        this.password = params.password;
        this.deviceId = params.deviceId;
    };

    getDbParams() {
        return {
            userName: this.username,
            passwordHash: this.password,
            deviceId: this.deviceId
        }
    }
}