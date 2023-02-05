const express = require("express")
const router = express.Router()
const { getTicket, getTicketId, createTicket, updateTicket, deleteTicket } = require("../controllers/tickets")

//TODO https://localhost/user CRUD

router.get("/", getTicket);
router.get("/:id", getTicketId);
router.post("/", createTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);


module.exports = router;