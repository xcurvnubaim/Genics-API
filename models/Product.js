const {
  Schema,
  model
} = require("mongoose");

// Create schema
// - name: String
// - price: Number
const Product = Schema();

module.exports = model('Products', Product);