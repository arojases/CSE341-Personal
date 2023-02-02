const express = require("express")
const router = express.Router()
const { getItem, getItemId, createItem } = require("../controllers/users")

//TODO https://localhost/user CRUD

router.get("/", getItem);
router.get("/:id", getItemId);
router.post("/", createItem);


module.exports = router;