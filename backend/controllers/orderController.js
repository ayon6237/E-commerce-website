const Order = require('../models/orderModel.js');


const addOrderItems = async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

  
    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    } else {
     
      const order = new Order({
        user: req.user._id, 
        orderItems,
        shippingAddress,
        paymentMethod,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


const getOrderById = async (req, res) => {
  try {
  
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


const getMyOrders = async (req, res) => {
  try {
    
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { addOrderItems ,getOrderById , getMyOrders};