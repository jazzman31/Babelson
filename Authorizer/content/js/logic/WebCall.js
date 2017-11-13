"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class WebCall {
    constructor(options) {
        this.options = options;
        this.method = this.options.method;
        this.url = this.options.url;
        this.contentType = this.options.contentType || "application/json";
        this.data = options.data || {};

        this.xmlhttprequest = new XMLHttpRequest();
    }

    send(params = {} || this.data) {
        return new Promise((resolve, reject) => {
            this.xmlhttprequest.open(this.method, this.url);
            this.xmlhttprequest.setRequestHeader("Content-Type", this.contentType);
            this.xmlhttprequest.responseType = 'json';
            this.xmlhttprequest.onload = () => {
                if (this.xmlhttprequest.status >= 200 && this.xmlhttprequest.status < 300) {
                    resolve(this.xmlhttprequest.response);
                } else {
                    reject(this.xmlhttprequest.statusText);
                }
            };
            this.xmlhttprequest.send(JSON.stringify(params));
        });
    }
}
exports.WebCall = WebCall;

//# sourceMappingURL=WebCall.js.map