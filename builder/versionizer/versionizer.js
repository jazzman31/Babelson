'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var process = require('process');
var fs = require('fs');

var Versionizer = (function () {
    function Versionizer() {
        _classCallCheck(this, Versionizer);

        this.myArguments = process.argv.slice(2);
        console.log('Im Versionizer! and I dont have a version of my Own!!!\n        \n        arguments:\n                   set version \'x.x.x\'\n                   set name\n                   set version increment [\'major\', \'minor\', \'patch\']\n                   \n                   all of these must end with a statement to the footprint.json path.\n                   example: set version increment minor footprint@../footprint.json\n        ');

        if (this.myArguments[0] === 'set') {
            if (this.myArguments[1] === 'version') {} else if (this.myArguments[1] === 'name') {} else if (this.myArguments[1] === 'version') {}
        }
        //set version

        //set name

        //writeFootPrint
        //read/analyzeFootPrint
    }

    _createClass(Versionizer, [{
        key: 'analyzeFootPrint',
        value: function analyzeFootPrint(path) {}
    }]);

    return Versionizer;
})();

new Versionizer();

//# sourceMappingURL=versionizer.js.map