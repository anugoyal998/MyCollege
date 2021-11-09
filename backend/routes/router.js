const express = require('express');
const router = new express.Router();

//auth
const { authAddUser } = require('../controllers/auth');
router.post('/auth/add/user',authAddUser)

//add to mail list
const { addToMailList } = require('../controllers/addToMailList')
router.post('/add/mail/list',addToMailList)


module.exports = router