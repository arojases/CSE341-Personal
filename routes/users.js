const express = require("express")
const router = express.Router()
const { getItem, getItemId, createItem, updateItem, deleteItem } = require("../controllers/users")

//TODO https://localhost/user CRUD

router.get("/", getItem);
router.get("/:id", getItemId);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);


module.exports = router;