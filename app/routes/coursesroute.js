const express=require('express')

const coursesController=require('../controllers/coursesController');
const { courses } = require('../controllers/homeController');

const router=express.Router();

router.get('/courses', coursesController.courses)

module.exports=router