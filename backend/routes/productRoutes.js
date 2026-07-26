const express = require('express');
const { getProducts, createProduct, getProductById, updateProduct, deleteProduct, createProductReview } =require('../controllers/productController.js') ;
const { protect, admin } = require('../middlewares/authMiddleware.js');

const router = express.Router();


router.route('/').get(getProducts).post(protect,admin,createProduct);
router.route('/:id').get(getProductById);

router.route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.route('/:id/reviews').post(protect, createProductReview);

module.exports = router