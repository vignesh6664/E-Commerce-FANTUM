const express = require("express");
const { getAllNewPants, createNewPants } = require("../models/pant");
const pool = require("../config/db");

const router = express.Router();

router.get("/pants", async (req, res) => {
  try {
    const pant = await getAllNewPants();
    res.json(pant);
  } catch (error) {
    res.status(500).json({ message: "Error from pants retriving", error });
  }
});

router.post("/pants", async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const pant = await createNewPants(name, price, image);
    res.status(201).json({ message: "Pant added" });
  } catch (error) {
    res.status(500).json({ message: "Error from pant creating", error });
  }
});
router.get("/pants/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const newproduct = await pool.query("SELECT * FROM pants WHERE id=$1", [
      id,
    ]);
    res.json(newproduct.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error from newproducts by id" });
  }
});

router.delete("/pants/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM pants WHERE id=$1", [id]);
    res.send("Deleted Pant");
  } catch (error) {
    res.status(500).json({ message: "Error from deleting pants", error });
  }
});

module.exports = router;
