"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LicenseModel = (function () {
    function LicenseModel(params) {
        _classCallCheck(this, LicenseModel);

        this.licenseId = params.licenseId;
        this.fk_userId = params.fk_userId;
        this.fk_productId = params.fk_productId;
        this.fk_licenseTypeId = params.fk_licenseTypeId;
        this.fk_licenseStatusId = params.fk_licenseStatusId;
        this.userId = params.userId;
        this.firstName = params.firstName;
        this.middleName = params.middleName;
        this.lastName = params.lastName;
        this.adressStreet = params.adressStreet;
        this.adressNumber = params.adressNumber;
        this.adressZipcode = params.adressZipcode;
        this.adressExtra = params.adressExtra;
        this.fk_countryId = params.fk_countryId;
        this.phone1 = params.phone1;
        this.phone2 = params.phone2;
        this.billingAdressStreet = params.billingAdressStreet;
        this.billingAdressNumber = params.billingAdressNumber;
        this.billingAdressZipcode = params.billingAdressZipcode;
        this.billingAdressFullname = params.billingAdressFullname;
        this.email = params.email;
        this.passHash = params.passHash;
        this.passwordHint1 = params.passwordHint1;
        this.productId = params.productId;
        this.productNameCode = params.productNameCode;
        this.productDisplayName = params.productDisplayName;
        this.fk_productTypeId = params.fk_productTypeId;
        this.productTypeId = params.productTypeId;
        this.productType = params.productType;
        this.productGuid = params.productGuid;
        this.productDescriptionCode = params.productDescriptionCode;
        this.productDescriptionText = params.productDescriptionText;
        this.productBaseImageName = params.productBaseImageName;
        this.fk_productVersionsComboId = params.fk_productVersionsComboId;
        this.productVersion = params.productVersion;
        this.fk_productChildrenId = params.fk_productChildrenId;
        this.fk_productCategoryId = params.fk_productCategoryId;
        this.licenseTypeId = params.licenseTypeId;
        this.licenseType = params.licenseType;
        this.licenseStatusId = params.licenseStatusId;
        this.licenseStatus = params.licenseStatus;
        this.deviceName = params.deviceName;
        this.deviceKeyString = params.deviceKeyString;
        this.deviceType = params.deviceType;
    }

    _createClass(LicenseModel, [{
        key: "toJSON",
        value: function toJSON() {
            return {
                licenseId: this.licenseId,
                userId: this.userId,
                firstName: this.firstName,
                middleName: this.middleName,
                lastName: this.lastName,
                adressStreet: this.adressStreet,
                adressNumber: this.adressNumber,
                adressZipcode: this.adressZipcode,
                adressExtra: this.adressExtra,
                phone1: this.phone1,
                phone2: this.phone2,
                billingAdressStreet: this.billingAdressStreet,
                billingAdressNumber: this.billingAdressNumber,
                billingAdressZipcode: this.billingAdressZipcode,
                billingAdressFullname: this.billingAdressFullname,
                email: this.email,
                passHash: this.passHash,
                passwordHint1: this.passwordHint1,
                productTypeId: this.productTypeId,
                productType: this.productType,
                productId: this.productId,
                productDisplayName: this.productDisplayName,
                productNameCode: this.productNameCode,
                productGuid: this.productGuid,
                productDescriptionCode: this.productDescriptionCode,
                productDescriptionText: this.productDescriptionText,
                productBaseImageName: this.productBaseImageName,
                productVersion: this.productVersion,
                licenseTypeId: this.licenseTypeId,
                licenseType: this.licenseType,
                licenseStatusId: this.licenseStatusId,
                licenseStatus: this.licenseStatus,
                deviceName: this.deviceName,
                deviceKeyString: this.deviceKeyString,
                deviceType: this.deviceType
            };
        }
    }]);

    return LicenseModel;
})();

exports.LicenseModel = LicenseModel;

//# sourceMappingURL=LicenseModel.js.map