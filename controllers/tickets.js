const { ticketmodel } = require("../models")

//Get list
const getTicket = async (req, res) => {

    const data = await ticketmodel.find({});

    res.send({data});

};

//Get detail
const getTicketId = async (req, res) => {

    const  id  = req.params.id;
    const data = await ticketmodel.findOne({_id:id});

    res.send({data});
};

//Insert 
const createTicket = async (req, res) => {

const { body } = req
console.log(body)

const data = await ticketmodel.create(body)
res.send({data})

};

//Update
const updateTicket = (req, res) => {};

//Delete
const deleteTicket = (req, res) => {};

module.exports = {
    getTicket,
    getTicketId,
    createTicket,
    updateTicket,
    deleteTicket
}