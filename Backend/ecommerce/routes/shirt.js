const express = require("express");
const { CreateNewShirt, getAllShirts } = require("../models/shirts");
const pool = require("../config/db");

const router = express.Router();

router.get("/shirts", async (req, res) => {
  try {
    const shirts = await getAllShirts();
    res.json(shirts);
  } catch (error) {
    res.status(500).json({ message: "Error from retriving shirts", error });
  }
});



router.get("/shirts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const shirt = await pool.query("SELECT * FROM shirts WHERE id=$1", [id]);
    res.json(shirt.rows[0]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error from geting patricular shirt", error });
  }
});

router.post("/shirts", async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const shirts = await CreateNewShirt(name, price, image);
    res.status(201).json({ message: "Shirt Added" });
  } catch (error) {
    res.status(500).json({ message: "Error from posting shirt", error });
  }
});

router.delete("/shirts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM shirts WHERE id=$1", [id]);
    res.send("Shirt Deleted");
  } catch (error) {
    res.status(500).json({ message: "Error from deleting shirts", error });
  }
});
module.exports = router;
