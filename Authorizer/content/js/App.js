"use strict";

var _EventBus = require("./js/lib/components/EventBus");

var Events = _interopRequireWildcard(_EventBus);

var _MainView = require("./js/views/MainView");

var _Template = require("./js/lib/components/Template");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/******
 * Global objects
 ****/
window.eventbus = new Events.EventBus();
window.Template = _Template.Template;

/**
 * Invoke content view
 */
document.addEventListener('DOMContentLoaded', () => {
  window.appInstance = undefined;
  new _MainView.MainView({
    el: 'main'
  });
});

//# sourceMappingURL=App.js.map