const express = require('express');
const { addOrderItems, getMyOrders, getOrderById } = require('../controllers/orderController.js');
const { protect } = require('../middlewares/authMiddleware.js');

const router = express.Router();


router.post('/', protect, addOrderItems);
router.get('/myorders', protect, getMyOrders);
router.get('/:id', protect, getOrderById);

module.exports = router;