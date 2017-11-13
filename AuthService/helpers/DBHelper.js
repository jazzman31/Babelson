class DBHelper {
    constructor() {
    }

    static serializeToSpParams(obj) {
        var result = '(';

        Object.keys(obj).forEach(function (key) {
            result += "'" + obj[key] + "',"
        });
        return result.slice(0, -1) + ')';
    }
}

module.exports = DBHelper;