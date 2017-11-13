import * as Events from "./js/lib/components/EventBus";
import {MainView} from "./js/views/MainView";
import {Template} from "./js/lib/components/Template";

/******
 * Global objects
 ****/
window.eventbus = new Events.EventBus();
window.Template = Template;

/**
 * Invoke content view
 */
document.addEventListener('DOMContentLoaded', ()=> {
    window.appInstance = this;
    new MainView({
        el: 'main'
    });
});


