export class ProductModel {
    constructor(params) {
        this.productDisplayName = params.productDisplayName;
        this.productNameCode = params.productNameCode;
        this.productGuid = params.productGuid;
        this.productDescriptionCode = params.productDescriptionCode;
        this.productDescriptionText = params.productDescriptionText;
        this.productBaseImageName = params.productBaseImageName;
        this.productType = params.productType;
        this.productCategoryCode = params.productCategoryCode;
        this.productVersion = params.productVersion
    }

    toJSON() {
        return {
            productDisplayName: this.productDisplayName,
            productNameCode: this.productNameCode,
            productGuid: this.productGuid,
            productDescriptionCode: this.productDescriptionCode,
            productDescriptionText: this.productDescriptionText,
            productBaseImageName: this.productBaseImageName,
            productType: this.productType,
            productCategoryCode: this.productCategoryCode,
            productVersion: this.productVersion
        }
    }
}
