const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const User = require('../models/user');

//signup user
exports.register_user = (req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length >= 1){
            return res.status(409).json({
                message:"email already exist"
            });
        }else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err){
                    return res.status(500).json({error:err});
                }else{
                    const user = new User({
                        _id : new mongoose.Types.ObjectId(),
                        fName : req.body.fName,
                        lName : req.body.lName,
                        email : req.body.email,
                        password : hash
                    });
                    user.save()
                    .then(result=>{
                        console.log(result);
                        res.status(201).json({
                            message:"user created"
                        });
                    })
                    .catch(err=>{
                        console.log(err);
                        res.status(500).json({error:err});
                    })
                }
            });
        }
    })
};


//login user 
exports.login_user = (req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length < 1){
            return res.status(401).json({message:"Auth failed"});
        }
        bcrypt.compare(req.body.password,user[0].password,(err,response)=>{
            if(err){
                return res.status(401).json({message:"Auth failed"});
            }
            if(response){
                const token = jwt.sign({
                                    email:user[0].email,
                                    userId : user[0]._id
                                },
                                process.env.JWT_KEY,
                                {
                                    expiresIn:"1h"
                                }
                                );
                res.status(200).json({
                    message:"Auth successful",
                    token : token
                });
            }
            return res.status(401).json({message:"Auth failed"});
        });

    })
    .catch(err =>{
        //console.log(err);
        res.status(500).json({error:err});
    });
};


//delete user
exports.delete_user = (req,res,next)=>{
    User.remove({_id:req.params.userId})
    .exec()
    .then(result =>{
        console.log(result);
        res.status(200).json({message:"user deleted"});
    })
    .catch(err =>{
        //console.log(err);
        res.status(500).json({error:err});
    });
};
