const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const connectDb = require("./db");
const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(`/api/v1/`, require(`./routes/authRoute`));
app.use(`/api/v1/`, require('./routes/studentRoute'))
app.all(`*`, (req, res, next) => {
  res.status(404).json({ message: `requested path not found, try '/'` });
  next();
});

app.listen(PORT, async () => {
  await connectDb(process.env.DB_URL);
  console.log(`server is started @ http://localhost:${PORT}`);
});
