'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var nodemailer = require('nodemailer');
var config = new require('./config').Config;

var MailService = (function () {
    function MailService(options) {
        _classCallCheck(this, MailService);

        this.transporter = nodemailer.createTransport(config.mailerConfig);
        this.mailOptions = options.mailOptions || {
            from: 'youremail@gmail.com',
            to: 'myfriend@yahoo.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };
    }

    _createClass(MailService, [{
        key: 'sendEmail',
        value: function sendEmail() {
            this.transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    }, {
        key: 'destruct',
        value: function destruct() {
            this.transporter = null;
            this.mailOptions = null;
        }
    }]);

    return MailService;
})();

exports.MailService = MailService;

//# sourceMappingURL=mailer.js.map