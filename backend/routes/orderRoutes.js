const express = require('express');
const { addOrderItems, getMyOrders, getOrderById, getOrders, updateOrderToPaid, updateOrderToDelivered } = require('../controllers/orderController.js');
const { protect, admin } = require('../middlewares/authMiddleware.js');

const router = express.Router();


router.post('/', protect, addOrderItems);
router.get('/myorders', protect, getMyOrders);
router.get('/:id', protect, getOrderById);
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/deliver', protect, admin, updateOrderToDelivered);

module.exports = router;