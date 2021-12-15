import toast from "react-hot-toast";
import validator from "validator";
import axios from "axios";

export const handleSubscribeUpdates = async (props) => {
    const {user,email,setLoading,setEmail} = props
    if(!user){
      toast.error("Login to subscribe to mailing list")
      return
    }
    if(user.email !== email){
      toast.error("Email doesn't match to user's email")
      return
    }
    setLoading((prev) => true);
    if(!validator.isEmail(email)){
      toast.error("Invalid Email")
      setLoading(prev => false)
      return
    }
    try {
      const url = process.env.REACT_APP_SERVER_BASE_URL2
      await axios.post(`${url}/add/mail/list`,user)
      toast.success("Email Added to mailing list")
      setEmail("")
      setLoading(prev => false)
    } catch (error) {
      toast.error("An error occurred")
      setLoading(prev => false)
    }
  };