const Product = require('../models/Product');


// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message : "Get Products Success",
      data : products
    })
  } catch (e) {
    res.status(500).json({
      message: "Get Products failed",
      data : e
    })
  }
};

// Save a product
const saveProduct = async (req, res) => {
  try {
    const Products = new Product(req.body);
    const saveProducts = await Products.save();

    res.status(201).json({
      message : "Save Product Success",
      data : saveProducts
    })
  } catch (error) {
    res.status(501).json({
      message: "Save Products failed",
      data : error
    })
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updateProd = req.body;
  try {
    const updateProduct = await Product.findByIdAndUpdate(productId, updateProd, {
      new: true
    });

    res.status(200).json({
      message : "Update product Success",
      data : updateProduct
    })
  } catch (error) {
    res.status(500).json({
      message: "Update product failed",
      data : error
    })
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deleteProduct = await Product.findByIdAndDelete(productId);

    res.status(200).json({
      message : "Delete product Success",
      data : deleteProduct
    })
  } catch (error) {
    res.status(500).json({
      message: "Delete product failed",
      data : error
    })
  }
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}