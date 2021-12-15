const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: 'string',
    mobile: 'string',
    password: 'string',
    roll: 'string',
})

const model = new mongoose.model('user',schema)

module.exports = model