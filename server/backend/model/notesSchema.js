const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    subject: 'string',
    chapter: 'string',
    sem: 'string',
    branch: 'string',
    cc: 'string',
    fileId: 'string',
    webContentLink: 'string',
    webViewLink: 'string',
})

const model = new mongoose.model('note',schema)

module.exports = model