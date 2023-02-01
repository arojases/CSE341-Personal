require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./connection/db")
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port, () => {
    console.log("https://localhost/" + port)
})

dbConnect()