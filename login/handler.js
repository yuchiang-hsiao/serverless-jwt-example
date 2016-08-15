'use strict';
var jwt = require('jsonwebtoken');
var PASSWORD = 'password';
var secretOrPrivateKey = 'SECRET';

module.exports.handler = function(event, context) {
    console.log(event);
    if (event.body.password && event.body.password === PASSWORD) {
        var dateTime = new Date().getTime();
        var timestamp = Math.floor(dateTime / 1000) + (60 * 60 * 24 * 7); // 一週後失效
        var payload = {
            iss: 'mysite.com',
            exp: timestamp
        }
        var token = jwt.sign(payload, secretOrPrivateKey);
        context.succeed({token: token});
    } else {
        context.fail({status: 'fail'})
    }
};
