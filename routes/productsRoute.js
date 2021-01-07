const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const productsController = require('../controllers/products');


//Get all products
router.get('/',productsController.get_all_products);

//Get single product 
router.get('/:productId',productsController.get_product);

//Create product
router.post('/',checkAuth, productsController.create_product);

//Delete Product
router.delete('/:productId',checkAuth, productsController.delete_product);

//Updating product 
router.patch('/:id',checkAuth, productsController.update_product);

module.exports = router;