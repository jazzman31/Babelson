import ResponseModel from 'ResponseModel';

class AuthenticatedResponseModel extends ResponseModel {
    constructor(params) {
        super(params);
        this.sessionToken = params.sessionToken;
    }
}