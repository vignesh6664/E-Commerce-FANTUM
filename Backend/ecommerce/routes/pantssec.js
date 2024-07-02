const express = require("express");
const { getAllNewPantssec, createNewPantssec } = require("../models/pantsec");
const pool = require("../config/db");

const router = express.Router();

router.get("/pantssec", async (req, res) => {
  try {
    const pant = await getAllNewPantssec();
    res.json(pant);
  } catch (error) {
    res.status(500).json({ message: "Error from pants retriving", error });
  }
});

router.post("/pantssec", async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const pant = await createNewPantssec(name, price, image);
    res.status(201).json({ message: "Pant added" });
  } catch (error) {
    res.status(500).json({ message: "Error from pant creating", error });
  }
});

router.get("/pantssec/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const newproduct = await pool.query("SELECT * FROM pantssec WHERE id=$1", [
      id,
    ]);
    res.json(newproduct.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error from newproducts by id" });
  }
});

router.delete("/pantssec/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM pantssec WHERE id=$1", [id]);
    res.send("Deleted Pant");
  } catch (error) {
    res.status(500).json({ message: "Error from deleting pants", error });
  }
});

module.exports = router;
