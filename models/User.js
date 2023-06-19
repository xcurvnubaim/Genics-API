const {
  Schema,
  model
} = require("mongoose");

// Create schema
// - name: String
// - age: Number

const User = Schema();

module.exports = model('Users', User);