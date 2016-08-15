'use strict';
var jwt = require('jsonwebtoken');
var secretOrPublicKey = 'SECRET';

module.exports.handler = function(event, context) {
    if (event.token) {
        try {
            var decode = jwt.verify(event.token, secretOrPublicKey);
        } catch (err) {
            console.log(err)
        }
        if (decode) {
            context.succeed({status: true})
        } else {
            context.fail({status: false})
        }
    }
};
