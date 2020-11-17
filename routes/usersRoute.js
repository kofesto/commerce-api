const express = require('express');
const router = express.Router();


const userController = require('../controllers/users');

//registering user 
router.post('/signup',userController.register_user);

//user login
router.post('/login',userController.login_user);

//delete user
router.delete('/:userId',userController.delete_user);

//test routes 
router.get('/',(req,res,next)=>{
    console.log('testing app');
    res.status(200).json({message:"Test worked"});
})

module.exports = router;