const pool = require("../config/db");

const getAllShirts = async () => {
  const { rows } = await pool.query("SELECT * FROM shirts");
  return rows;
};

const CreateNewShirt = async (name, price, image) => {
  const { rows } = pool.query(
    "INSERT INTO shirts (name,price,image) VALUES ($1,$2,$3)",
    [name, price, image]
  );
  return rows[0];
};

module.exports = {
  getAllShirts,
  CreateNewShirt,
};
