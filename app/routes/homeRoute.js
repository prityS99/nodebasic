const express=require('express')

const homeController=require('../controllers/homeController');
const contactController=require('../controllers/contactController');


const router=express.Router();

router.get('/',homeController.index)
router.get('/about',homeController.about)
router.get('/contact', homeController.contact)
router.get('/blog', homeController.blog)
router.get('/blog-single', homeController.contact)
router.get('/courses', homeController.contact)


module.exports=router


