"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserModel = function UserModel(params) {
    _classCallCheck(this, UserModel);

    this.id = params.id;
    this.firstName = params.firstName;
    this.middleName = params.middleName;
    this.lastName = params.lastName;
    this.addressStreet = params.addressStreet;
    this.adressNumber = params.adressNumber;
    this.adressZipcode = params.adressZipcode;
    this.addressExtra = params.addressExtra;
    this.fk_countryId = params.fk_countryId;
    this.contryCode = params.contryCode;
    this.countryName = params.countryName;
    this.phone1 = params.phone1;
    this.phone2 = params.phone2;
    this.billingAdressStreet = params.billingAdressStreet;
    this.billingAdressNumber = params.billingAdressNumber;
    this.billingAdressZipcode = params.billingAdressZipcode;
    this.billingAdressFullname = params.billingAdressFullname;
    this.email = params.email;
    this.passHash = params.passHash;
    this.passwordHint1 = params.passwordHint1;
};

exports.UserModel = UserModel;

//# sourceMappingURL=UserModel.js.map