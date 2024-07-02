const pool = require("../config/db");

const getAllNewPantssec = async () => {
  const { rows } = await pool.query("SELECT * FROM pantssec");
  return rows;
};

const createNewPantssec = async (name, price, image) => {
  const { rows } = await pool.query(
    "INSERT INTO pantssec (name,price,image) VALUES($1,$2,$3)",
    [name, price, image]
  );
  return rows[0];
};

module.exports = {
  getAllNewPantssec,
  createNewPantssec,
};
