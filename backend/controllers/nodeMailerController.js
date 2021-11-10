const nodemailer = require('nodemailer')
const mailListSchema = require('../model/mailListSchema')
const _  = require('lodash')
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'goyalanubhav435@gmail.com',
        pass: process.env.NODEMAILER_PASS
    }
})

const sendMail = async (req, res) => {
    let mailList = []
    try {
        const response = await mailListSchema.find({})
        response.map((e, key)=> {
            mailList.push(e.email)
        })
    } catch (error) {
        res.status(400).json("error")
        console.log("error in getting maillist mail", error)
        return;
    }
    if(mailList.length<=0){
        return;
    }
    let sendTo = _.chunk(mailList,20)
    sendTo.map((e, key)=> {
        setTimeout(() => {
        
        const func = ()=> {
            const mailOptions = {
                from: 'goyalanubhav435@gmail.com',
                to: e,
                subject: 'Hello World',
                text: 'This is the body of your email',
                html: '<h1>Hello World!!! This text email</h1>'
            }
            transport.sendMail(mailOptions,(error,info)=> {
                if(error){
                    res.status(400).json("error")
                    // console.log(error)
                    return;
                }
            })
        }
        func();
        }, 10000);
    })
    console.log("email sent")
    res.status(200).json("success")
}

const sendOTP = async(req, res)=> {
    const mailOptions = {
        from: 'goyalanubhav435@gmail.com',
        to: req.body.email,
        subject: 'Hello World',
        text: req.body.otp,
    }
    transport.sendMail(mailOptions,(error,info)=> {
        if(error){
            res.status(400).json("error")
            console.log(error)
            return;
        }else{
            res.status(200).json("OTP Sent Successfully")
        }
    })
}

module.exports = {
    sendMail,
    sendOTP
}