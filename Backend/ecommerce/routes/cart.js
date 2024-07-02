const express = require("express");
const pool = require("../config/db");
const { route } = require("./Products");
const router = express.Router();

router.post("/cart", async (req, res) => {
  const { userId, tshirtId, pantssecId, shirtId, quantity } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO cart_items (userId, tshirtId, pantssecId, shirtId, quantity ) VALUES($1,$2,$3,$3,$5)",
      [userId, shirtId, tshirtId, quantity, pantssecId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error From Cart_Items" });
  }
});

router.delete("/cart/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM cart_items WHERE id=$1", [id]);
    res.send("Deleted");
  } catch (error) {
    res.status(500).json({ message: "Error from deleting cart", error });
  }
});

module.exports = router;
