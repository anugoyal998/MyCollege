const UploadNotesSchema = require('../model/notesSchema')

const searchBranchNotes = async (req, res) => {
    try{
        const {title} = req.body;
        const branch = title.toLowerCase();
        const response = await UploadNotesSchema.find({branch})
        res.status(200).send(response)
    }catch(err){
        res.status(400).send(err)
        console.log("error in searcg notes branch",err)
    }
}

const searchAllNotes = async (req, res) => {
    try{
        const response = await UploadNotesSchema.find({})
        res.status(200).send(response)
    }catch(err){
        res.status(400).send(err)
        console.log("error in search all notes branch",err)
    }
}

module.exports = {
    searchBranchNotes,
    searchAllNotes,
}