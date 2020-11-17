const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const productsController = require('../controllers/products');


//Get all products
router.get('/',productsController.get_all_products);

//Get single product 
router.get('/:productId',productsController.get_product);

//Create product
router.post('/',productsController.create_product);

//Delete Product
router.delete('/:productId',productsController.delete_product);

//Updating product 
router.patch('/:productId',productsController.update_product);

module.exports = router;