const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const otpGenerator = require('otp-generator')
const bcrypt = require('bcryptjs');


const twilloSendSMS = async (req,res) => {
    const otp = await otpGenerator.generate(6,{upperCaseAlphabets: false,specialChars: false})
    const hashedOTP = await bcrypt.hash(otp,10)
    client.messages.create({
        body: `Your MyCollege OTP is ${otp}`,
        from: process.env.TWILLO_NUMBER,
        to: `${req.body.mobile}`
    }).then(message => {
        console.log(message.sid)
        res.status(200).json(hashedOTP)
    })
    .catch(err => {
        console.error(err)
        res.status(400).json("error")
    })
}

module.exports = {
    twilloSendSMS,
}