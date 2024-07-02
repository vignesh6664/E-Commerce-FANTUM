require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
// const productRoutes = require("./routes/product");
const newProductRoutes = require("./routes/newProduct");
const pantRoutes = require("./routes/pants");
const sweatShirtRoutes = require("./routes/sweatShirt");
const shirtRoutes = require("./routes/shirt");
const pantssecRoutes = require("./routes/pantssec");
const tshirtRoutes = require("./routes/tshirts");
const productRoutes = require("./routes/Products");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", authRoutes);
app.use("/", newProductRoutes);
app.use("/", pantRoutes);
app.use("/", sweatShirtRoutes);
app.use("/", shirtRoutes);
app.use("/", pantssecRoutes);
app.use("/", tshirtRoutes);
app.use("/", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
