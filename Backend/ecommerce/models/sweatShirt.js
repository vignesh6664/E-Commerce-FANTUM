const pool = require("../config/db");

const getAllSweatShirts = async () => {
  const { rows } = await pool.query("SELECT * FROM sweatshirts");
  return rows;
};

const createSweatShirt = async (name, price, image) => {
  const { rows } = await pool.query(
    "INSERT INTO sweatshirts (name,price,image) VALUES($1,$2,$3)",
    [name, price, image]
  );
  return rows[0];
};

module.exports = {
  getAllSweatShirts,
  createSweatShirt,
};
