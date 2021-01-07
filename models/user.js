const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    fName : {type : String, required :true},
    lName : {type : String, required : true},
    email : {type : String , required : true,unique:true},
    password : {type : String, required : true},
    dateCreated : {type: Date, default : Date.now}
});

module.exports = mongoose.model('User',userSchema);