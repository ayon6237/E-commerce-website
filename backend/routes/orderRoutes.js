const express = require('express');
const { addOrderItems } = require('../controllers/orderController.js');
const { protect } = require('../middlewares/authMiddleware.js');

const router = express.Router();


router.post('/', protect, addOrderItems);

module.exports = router;