export class BaseCollection {
    constructor(options) {
        this.options = options;
        this.modelClass = this.options.model;
        this.models = [];
    }

    reset(data) {
        this.models.length = 0;
        data.forEach((jsonModel)=> {
            this.models.push(new this.modelClass(jsonModel))
        });
    }

    toJSON() {
        let result = [];
        this.models.forEach((model)=> {
            result.push(model.toJSON());
        });
        return result;
    }

    forEach(callback) {
        this.models.forEach(function (model) {
            callback(model);
        });
    }
}