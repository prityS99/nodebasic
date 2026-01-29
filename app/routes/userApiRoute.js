const express=require('express');
const userApiController = require('../controllers/userApiController');

const router =express.Router()

router.post('/create/user', userApiController.createUser)
router.get('/user', userApiController.getUser)


module.exports=router