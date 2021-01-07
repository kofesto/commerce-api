const mongoose = require('mongoose');
const Product = require('../models/product');

exports.get_all_products = (req,res,next)=>{
    Product.find()
    .exec()
    .then(data=>{
        //console.log(data);
        res.status(200).json(data);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error : err});
    });
};

exports.get_product = (req,res,next)=>{
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(item =>{
        //console.log(item);
        if(item){
            res.status(200).json(item);
        }else{
            res.status(404).json({message:"No valid entry found for provided product ID"});
        }
    })
    .catch(err =>{
        //console.log(err);
        res.status(500).json({error:err});
    });
};

exports.create_product = (req,res,next)=>{
    const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        productName : req.body.productName,
        price : req.body.price,
        description : req.body.description
    });
    product.save().then(result =>{
        //console.log(result);
        res.status(201).json({
            message:"product created", 
            createdProduct : result
        });
    }).catch(err=>{
        //console.log(err);
        res.status(500).json({error:err});
    }); 
};

exports.delete_product =(req,res,next)=>{
    id = req.params.productId;
    Product.remove({_id:id})
    .exec()
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err =>{
        //console.log(err);
        res.status(500).json({error:err});
    });
};

exports.update_product = (req,res,next)=>{
    /*
    id = req.params.productId;
    const updateOps ={};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Product.update({_id :id},{
        $set:updateOps
    }).exec()
    .then(result =>{
        //console.log(result);
        res.status(200).json(result)
    })
    .catch(err=>{
        //console.log(err);
        res.status(500).json({error:err});
    });
    */
    const {id:_id} = req.params;
    const products = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({message:"product does not exist"});
    }else{
        Product.findByIdAndUpdate(_id,products,{new:true })
        .then(result =>{
            //console.log(result)
            res.status(200).json({upDatedProducts : result});
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({error:err});
        });
        //res.status(200).json(upDatedProducts);
    }
};