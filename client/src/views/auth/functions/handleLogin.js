import toast from "react-hot-toast"
import bcrypt from "bcryptjs"
import Cookies from "js-cookie"
import axios  from "axios"

export const handleLogin = async ({setLoading,state})=> {
    const url = process.env.REACT_APP_SERVER_BASE_URL2
    if(!state.mobile || !state.password || !state.otpByUser || !state.otp) {
        toast.error("All Fields are required")
        return
    }
    setLoading(prev => true)
    const x = await bcrypt.compare(state.otpByUser,state.otp)
    if(x === false) {
        toast.error("OTP didn't match")
        setLoading(prev=> false)
        return
    }
    const data = {mobile:state.mobile,password:state.password}
    try {
        const response = await axios.post(`${url}/auth/login`,data)
        var jsonString = JSON.stringify(response.data)
        Cookies.set('user',jsonString,{expires: 7})
        toast.success("Login successful")
        setLoading(prev=> false)
        setInterval(() => {
            window.location.reload()
        }, 1000);
    } catch (error) {
        // console.log("error in login", error)
        toast.error("An error occurred")
        setLoading(prev=> false)
        return
    }
}