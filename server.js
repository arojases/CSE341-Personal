require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./connection/db")
const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

app.use(express.json());

/*Routes*/
app.use("/", require("./routes"));

app.listen(port, () => {
    console.log("Using https://localhost/" + port)
})

dbConnect()