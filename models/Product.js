const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const productSchema = new mongoose.Schema(
  {
    id: { type: String, default: require("uuid").v4() },
    name: { type: String, required: true },
    description: String,
    price: Number,
    category: String,
    inStock: Boolean,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productSchema);
