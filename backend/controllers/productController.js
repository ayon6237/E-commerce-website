const Product = require('../models/productModel') ;

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


const createProduct = async (req, res) => {
  try {
    const { name, brand, category, description, price, countInStock, image } = req.body;

    const product = new Product({
      name,
      brand,
      category,
      description,
      price,
      countInStock,
      image,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error: error.message });
  }
};

module.exports = {getProducts,createProduct}