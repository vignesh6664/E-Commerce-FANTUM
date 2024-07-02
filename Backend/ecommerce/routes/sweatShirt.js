const express = require("express");
const { createSweatShirt, getAllSweatShirts } = require("../models/sweatShirt");
const pool = require("../config/db");

const router = express.Router();

router.get("/sweatshirts", async (req, res) => {
  try {
    const sweatShirt = await getAllSweatShirts();
    res.status(201).json(sweatShirt);
  } catch (error) {
    res.status(500).json({ message: "Error from retriving sweatshirt" });
  }
});

router.get("/sweatshirts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const newproduct = await pool.query(
      "SELECT * FROM sweatshirts WHERE id=$1",
      [id]
    );
    res.json(newproduct.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error from newproducts by id" });
  }
});

router.post("/sweatshirts", async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const sweatShirt = await createSweatShirt(name, price, image);
    res.json({ message: "sweatshirt created" });
  } catch (error) {
    res.status(500).json({ message: "Error from creating sweatshirt" });
  }
});

router.delete("/sweatshirts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM sweatshirts WHERE id=$1", [
      id,
    ]);
    res.status(201).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error from deleting sweatshirts", error });
  }
});

module.exports = router;
