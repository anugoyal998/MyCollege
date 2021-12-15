const authSchema = require('../model/authSchema')
const bcrypt = require('bcryptjs')

const authAddUser = async (req,res) => {
    var findData = []
    try {
        findData = await authSchema.find({mobile: req.body.mobile})   
        if(findData.length > 0){
            res.status(400).json("Already exists")
            return
        }
        const data = new authSchema(req.body)
        await data.save()
        res.status(200).json("user added successfully")
    } catch (error) {
        console.log("error in authAddUser", error)
        res.status(400).json("error")
        return
    }
}

const authRemoveUser = async (req, res) => {
    try{
        await authSchema.deleteOne({email: req.body.mobile})
        res.status(200).json("user deleted successfully")
    }catch (error) {
        console.log("error in authRemoveUser", error)
        res.status(400).json("error")
    }
}

const authLogin = async (req, res) => {
    try {
        const findData = await authSchema.find({mobile: req.body.mobile})
        if(findData.length <=0){
            res.status(400).json("No user found")
            return
        }
        const x = bcrypt.compare(req.body.password, findData[0].password)
        console.log(x)
        if(x === false){
            res.status(400).json("incorrect password")
            return
        }
        res.status(200).json({
            name: findData[0].name,
            mobile: findData[0].mobile,
            roll: findData[0].roll
        })
    } catch (error) {
        console.log("error in authLogin", error)
        res.status(400).json("error")
    }
}

module.exports = {
    authAddUser,
    authRemoveUser,
    authLogin,
}