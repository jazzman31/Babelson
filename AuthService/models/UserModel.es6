export class UserModel {
    constructor(params) {
        
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
    }
}
