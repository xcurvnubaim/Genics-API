const {
  Schema,
  model
} = require("mongoose");

// Create schema
// - name: String
// - age: Number

const User = mongoose.Schema();

module.exports = model('Users', User);