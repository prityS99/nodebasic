const express=require('express')

const aboutController=require('../controllers/aboutController');
const { about } = require('../controllers/homeController');


const router=express.Router();

router.get('/blog', aboutController,about)

module.exports=router