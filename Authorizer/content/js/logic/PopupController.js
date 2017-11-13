'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupController = undefined;

var _PopupFactory = require('../factories/PopupFactory');

class PopupController {
    constructor() {
        console.log('initializing PopupController');
        let popupEventNameCollection = [{ name: "EVENT_LOGIN_FAILED", popup: 'loginFailed' }];

        this.constructPopupInvokers(popupEventNameCollection);
    }

    constructPopupInvokers(popupEventNameCollection) {
        popupEventNameCollection.forEach(popEvent => {
            console.log('Constructing popup "${popEvent["popup"]} for ${popEvent["name"]}"');
            window.eventBus.listenTo(popEvent.name, _PopupFactory.PopupFactory.pop(popEvent['popup']));
        });
    }
}
exports.PopupController = PopupController;

//# sourceMappingURL=PopupController.js.map