const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser, getAllUser } = require("../models/user");
const pool = require("../config/db");
const router = express.Router();

// Signup Route

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  if (user) {
    return res.status(400).json({ message: "user already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await createUser(email, hashedPassword);

  res.status(201).json({ message: "User Created Successfully", user: newUser });
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    res.json(user.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error from user id" });
  }
});
router.get("/users", async (req, res) => {
  try {
    const users = await getAllUser();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error From Retriving Users", error });
  }
});

// Login Route

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  //   const token = jwt.sign({ userId: user.id }, "Your Jwt token", {
  //     expiresIn: "1h",
  //   });

  //   res.json({ token });

  res.json({ message: "Logged In" });
});

module.exports = router;
