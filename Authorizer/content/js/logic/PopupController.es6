import {PopupFactory} from '../factories/PopupFactory';

export class PopupController {
    constructor() {
        console.log('initializing PopupController');
        let popupEventNameCollection = [
            {name: "EVENT_LOGIN_FAILED", popup: 'loginFailed'}
        ];

        this.constructPopupInvokers(popupEventNameCollection);
    }

    constructPopupInvokers(popupEventNameCollection) {
        popupEventNameCollection.forEach((popEvent)=> {
            console.log('Constructing popup "${popEvent["popup"]} for ${popEvent["name"]}"');
            window.eventBus.listenTo(popEvent.name, PopupFactory.pop(popEvent['popup']));
        });
    }
}