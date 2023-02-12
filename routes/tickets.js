const express = require("express")
const router = express.Router()
const validation = require("../validators/tickets")
const { getTicket, getTicketId, createTicket, updateTicket, deleteTicket } = require("../controllers/tickets")

//TODO https://localhost/user CRUD

router.get("/", getTicket);
router.get("/:id", getTicketId);
router.post("/", validation.saveTicket, createTicket);
router.put("/:id", validation.saveTicket, updateTicket);
router.delete("/:id", deleteTicket);


module.exports = router;