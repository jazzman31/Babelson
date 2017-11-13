'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.routeHandler = routeHandler;

function routeHandler(expressAppInstance, routeCollection) {
    routeCollection.forEach(function (route) {
        expressAppInstance[route['method']](route['url'], function (request, response) {
            var controllerClass = new route['controllerClass']();
            var requestModel = new route['requestModel'](request.body);
            var parsingFunction = route['parsingFunction'] || 'toJSON';
            var responseModel = route['responseModel'];

            controllerClass[route['action']](requestModel[parsingFunction]()).then(function (retVal) {
                console.log('then for response is ', retVal);
                var result = retVal;
                if (responseModel) {
                    if (result.constructor.name.indexOf('Collection') != -1) {
                        result = new responseModel({
                            success: true,
                            data: result.toJSON()
                        }).toJSON().data;
                    }
                }

                response.json(result);
            })['catch'](function (onReject) {
                console.log('fail for response is ', onReject);
                response.json(onReject);
            });
        });
    });
}

//# sourceMappingURL=routeHandler.js.map