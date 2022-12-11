// require('dotenv').config();
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = "AC3690e617dc6eefd0612ef722bafe4c7c"
const authToken = "8666e885a7f93e19c6126f233b860094"
const serviceSid = "VA9ed919d699d8a0776d8e83c852d9c732"
const client = require('twilio')(accountSid, authToken);

function sendSMS(phoneNumber){
    client.verify.v2.services(serviceSid)
                        .verifications
                        .create({to: '+91' + phoneNumber, channel: 'sms'})
                        .then(verification => console.log(verification.sid));
}

function verifyCode(phoneNumber, verificationCode){
    let status = ""
    client.verify.v2.services(serviceSid)
                    .verificationChecks
                    .create({to : '+91'+phoneNumber, code: ''+verificationCode})
                    .then(verification_check => console.log(verification_check.status));
}

sendSMS(9104684900);

// verifyCode(9104684900, 350978);