const express = require("express");
const pool = require("../config/db");
const router = express.Router();

router.get("/products/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM products WHERE category = $1",
      [category]
    );
    res.json(rows);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/products/:category/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const newproduct = await pool.query("SELECT * FROM products WHERE id=$1", [
      id,
    ]);
    res.json(newproduct.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error from newproducts by id" });
  }
});
router.delete("/products/:category/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM products WHERE id=$1", [id]);
    res.send("Deleted");
  } catch (error) {
    res.status(500).json({ message: "Error from deleting shirts", error });
  }
});
router.post("/products", async (req, res) => {
  const { name, image, category, price } = req.body; // Assuming you're sending these in the request body

  try {
    const product = await pool.query(
      "INSERT INTO products (name,image,category,price) VALUES($1,$2,$3,$4)",
      [name, image, category, price]
    );

    res.status(201).json({ message: "Inserted" }); // Respond with the newly inserted product
  } catch (err) {
    console.error("Error inserting product:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
