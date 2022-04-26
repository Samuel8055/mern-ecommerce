const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

const port = process.env.PORT || 5001;

app.use("/", (req, res) => {
  res.send("E-commerce app build!");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
