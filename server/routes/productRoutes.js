const router = require("express").Router();
const {
  getAllProducts,
  getProductById,
} = require("../controllers/productControllers");

// Get all products
router.get("/", getAllProducts);

// Get a product
router.get("/:id", getProductById);

module.exports = router;
