const mailListSchema = require('../model/mailListSchema')
const authSchema = require('../model/authSchema')
const addToMailList = async (req,res) => {
    try {
        const findData = await authSchema.find({gid: req.body.gid})
        if(findData.length <= 0){
            res.status(400).json("User not found")
            return
        }
        const findMail = await mailListSchema.find({gid: req.body.gid})
        if(findMail.length > 0){
            res.status(200).json("added to mailList")
            return    
        }
        const data = new mailListSchema(req.body)
        await data.save()
        res.status(200).json("added to mailList")
    } catch (error) {
        res.status(400).json("An Error occurred",error)
    }
}

module.exports = {
    addToMailList
}