const express = require("express")
require("dotenv").config()

const app = express()

const port = process.env.PORT || 5001

app.use("/", (req, res) => {
  res.send("E-commerce app build!")
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
