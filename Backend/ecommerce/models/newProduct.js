const pool = require("../config/db");

const getAllNewProducts = async () => {
  const { rows } = await pool.query("SELECT * FROM newproducts");
  return rows;
};

const createNewProduct = async (name, price, image) => {
  const { rows } = await pool.query(
    "INSERT INTO newproducts (name,price,image) VALUES ($1,$2,$3)",
    [name, price, image]
  );
  return rows[0];
};

module.exports = {
  getAllNewProducts,
  createNewProduct,
};
