const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//posting
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(err);
  }
});

// reading product(viewing)

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(product);
});

// read single product
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).send({ message: "Product not found" });
  }
  res.send(product);
});

//update product

router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    return res.status(404).send({ message: "Product not found" });
  }

  res.send(product);
});

//delete product
router.delete("/:id", async (req, resp) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).send({ message: "Product not found" });
  }

  res.send(product);
});

module.exports = router;
