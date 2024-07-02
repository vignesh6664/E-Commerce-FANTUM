const express = require("express");
const { createNewtShirts,getAllNewtShirts } = require("../models/tshirts");
const pool = require("../config/db");

const router = express.Router();

router.get("/tshirts", async (req, res) => {
  try {
    const newProducts = await getAllNewtShirts();
    res.json(newProducts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error From New tshirts Retriving", error });
  }
});

router.get("/tshirts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const newproduct = await pool.query(
      "SELECT * FROM tshirts WHERE id=$1",
      [id]
    );
    res.json(newproduct.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error from tshirts by id" });
  }
});
router.post("/tshirts", async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const newproduct = await createNewtShirts(name, price, image);
    res.status(201).json({ message: "New Product Added" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error From Creating new products", error });
  }
});

router.delete("/tshirts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM tshirts WHERE id=$1", [
      id,
    ]);
    res.status(201).json({ message: "tshirt Deleted SUccesfully" });
    if (result.rows.length === 0) {
      return res.status(404).send("product not found");
    }
  } catch (error) {
    res.status(500).json({ message: "Error form deleting products", error });
  }
});
module.exports = router;
