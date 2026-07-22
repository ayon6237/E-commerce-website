const express = require('express');
const { getProducts, createProduct } =require('../controllers/productController.js') ;

const router = express.Router();


router.route('/').get(getProducts).post(createProduct);

module.exports = router