export const otpGenerator = ()=> {
    var digits = `${process.env.OTP_GEN_KEY}`
    let OTP = '';
    for (let i = 0; i < 6; i++ ) {
        OTP += digits[(Math.floor(Math.random() * 10))%10];
    }
    return OTP;
}