const pool = require("../config/db");

const getAllNewtShirts = async () => {
  const { rows } = await pool.query("SELECT * FROM tshirts");
  return rows;
};

const createNewtShirts = async (name, price, image) => {
  const { rows } = await pool.query(
    "INSERT INTO tshirts (name,price,image) VALUES ($1,$2,$3)",
    [name, price, image]
  );
  return rows[0];
};

module.exports = {
  getAllNewtShirts,
  createNewtShirts,
};
