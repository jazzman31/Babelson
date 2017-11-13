var nodemailer = require('nodemailer');
var config = new require('./config').Config;

export class MailService {
    constructor(options) {
        this.transporter = nodemailer.createTransport(config.mailerConfig);
        this.mailOptions  = options.mailOptions || {
            from: 'youremail@gmail.com',
            to: 'myfriend@yahoo.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };
    }

    sendEmail() {
        this.transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

    destruct() {
        this.transporter = null;
        this.mailOptions = null;
    }
}