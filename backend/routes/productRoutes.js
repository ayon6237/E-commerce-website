const express = require('express');
const { getProducts, createProduct, getProductById, updateProduct, deleteProduct } =require('../controllers/productController.js') ;
const { protect, admin } = require('../middlewares/authMiddleware.js');

const router = express.Router();


router.route('/').get(getProducts).post(protect,admin,createProduct);
router.route('/:id').get(getProductById);

router.route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = router