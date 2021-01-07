const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    productName : {type : String, required : true},
    price : {type: Number, default : 0.00},
    description :{type : String},
    dateCreated :{type : Date, default: Date.now}
});

module.exports = mongoose.model('Product',productSchema);