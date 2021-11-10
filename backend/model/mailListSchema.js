const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: 'string',
    gid: 'string',
    img: 'string',
    email: 'string',
})

const model = new mongoose.model('mailList',schema)

module.exports = model