const pool = require("../config/db");

const getAllNewPants = async () => {
  const { rows } = await pool.query("SELECT * FROM pants");
  return rows;
};

const createNewPants = async (name, price, image) => {
  const { rows } = await pool.query(
    "INSERT INTO pants (name,price,image) VALUES($1,$2,$3)",
    [name, price, image]
  );
  return rows[0];
};

module.exports = {
  getAllNewPants,
  createNewPants,
};
