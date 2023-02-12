const express = require("express")
const router = express.Router()
const validation = require('../validators/users');
const { getItem, getItemId, createItem, updateItem, deleteItem } = require("../controllers/users")

//TODO https://localhost/user CRUD

router.get("/", getItem);
router.get("/:id", getItemId);
router.post("/", validation.saveContact, createItem);
router.put("/:id", validation.saveContact, updateItem);
router.delete("/:id", deleteItem);


module.exports = router;