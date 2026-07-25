const express = require('express');
const { getProducts, createProduct, getProductById } =require('../controllers/productController.js') ;
const { protect, admin } = require('../middlewares/authMiddleware.js');

const router = express.Router();


router.route('/').get(getProducts).post(protect,admin,createProduct);
router.route('/:id').get(getProductById);

module.exports = router