export class MyLicensesRequestModel {
    constructor(params) {
        this.userId = params.userId;
    };

    getDbParams() {
        return {
            userId: this.userId
        }
    }
}