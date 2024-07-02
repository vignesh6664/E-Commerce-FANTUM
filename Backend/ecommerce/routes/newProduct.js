const express = require("express");
const { getAllNewProducts, createNewProduct } = require("../models/newProduct");
const pool = require("../config/db");

const router = express.Router();

router.get("/newproducts", async (req, res) => {
  try {
    const newProducts = await getAllNewProducts();
    res.json(newProducts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error From New Products Retriving", error });
  }
});

router.get("/newproducts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const newproduct = await pool.query(
      "SELECT * FROM newproducts WHERE id=$1",
      [id]
    );
    res.json(newproduct.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error from newproducts by id" });
  }
});
router.post("/newproducts", async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const newproduct = await createNewProduct(name, price, image);
    res.status(201).json({ message: "New Product Added" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error From Creating new products", error });
  }
});

router.delete("/newproducts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM newproducts WHERE id=$1", [
      id,
    ]);
    res.status(201).json({ message: "Product Deleted SUccesfully" });
    if (result.rows.length === 0) {
      return res.status(404).send("product not found");
    }
  } catch (error) {
    res.status(500).json({ message: "Error form deleting products", error });
  }
});

// cart section
router.post("/cart", async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO cart_items (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *",
      [userId, productId, quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error from cart posting" });
  }
});

router.get("/cart/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      "SELECT ci.id, p.name, p.price, ci.quantity FROM cart_items ci JOIN products p ON ci.product_id = p.id WHERE ci.user_id = $1",
      [userId]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.put("/cart/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const result = await pool.query(
      "UPDATE cart_items SET quantity = $1 WHERE id = $2 RETURNING *",
      [quantity, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/cart/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM cart_items WHERE id = $1", [id]);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
