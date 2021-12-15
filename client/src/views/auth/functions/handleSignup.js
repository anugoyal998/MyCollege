import axios from "axios"
import toast from "react-hot-toast"
import validator from "validator"
import bcrypt from 'bcryptjs'
import Cookies from 'js-cookie'


export const handleSendOtp = async ({setLoading,setState,state}) => {
    const mobile = state.mobile
    if(!mobile){
        toast.error("Invalid mobile number")
        return
    }
    if(!validator.isMobilePhone(mobile)){
        toast.error("Invalid mobile number")
        return
    }
    const url = process.env.REACT_APP_SERVER_BASE_URL2
    setLoading(prev => true)
    try {
        const response = await axios.post(`${url}/send/sms`,{mobile})
        setState({...state,otp: response.data})
        setLoading(prev => false)
        toast.success("OTP sent successfully")
        return
    } catch (error) {
        console.log("error in send otp", error)
        setLoading(prev => false)
        toast.error("An error occurred")
        return
    }
}

export const handleSignup = async ({setLoading,state}) => {
    const url = process.env.REACT_APP_SERVER_BASE_URL2
    if(!state.name || !state.mobile || !state.roll || !state.password || !state.otp || !state.otpByUser) {
        toast.error("All Fields are required")
        return
    }
    const x = await bcrypt.compare(state.otpByUser,state.otp)
    if(x === false) {
        toast.error("OTP didn't match")
        return
    }
    setLoading(prev => true)
    const hashPassword = await bcrypt.hash(state.password,10)
    const data = {name: state.name, password: hashPassword,mobile: state.mobile,roll: state.roll}
    try {
        await axios.post(`${url}/auth/add/user`,data)
    } catch (error) {
        console.log("error in signup",error)
        toast.error("An error occurred")
        window.location.reload()
        return
    }
    const cooieData = {name: state.name, mobile: state.mobile, roll: state.roll}
    var jsonString = JSON.stringify(cooieData)
    Cookies.set('user', jsonString,{expires: 7})
    setLoading(prev => false)
    toast.success("Signup successful")
    setInterval(() => {
        window.location.reload()
    }, 1000);
}