import DBController from './DBController';
import {StoredProcedure} from '../enums/StoredProcedure';
import {LoginRequestModel} from '../models/request/LoginRequestModel'
import {UserModel} from '../models/UserModel';

export class UserController {
    constructor() {
    }

    getUserByEmail(params) {
        return new Promise((resolve, reject) => {
            let dbController = new DBController();
            dbController.query(`call ${StoredProcedure.USER_LOGIN}`, params)
                .then((result)=> {
                    resolve(result)
                })
                .fail((result)=> {
                    reject(result)
                });
        });
    }

    login(params) {
        let dbController = new DBController();
        return new Promise((resolve, reject)=> {
            dbController.query(`call ${StoredProcedure.USER_LOGIN}`, params)
                .then((sqlRet)=> {
                    resolve(new UserModel(sqlRet[0][0]));
                })
                .catch((err)=> {
                    reject(err)
                });

        });
    }

    register(params) {
        return new Promise((resolve, reject) => {
            new DBController().query(`call ${StoredProcedure.USER_REGISTER}`, params)
                .then((result)=> {
                    resolve(result)
                })
                .fail((result)=> {
                    reject(result)
                });
        });
    }

}