const { ticketmodel } = require("../models")

//Get list
const getTicket = async (req, res) => {

    try {
        const data = await ticketmodel.find({});
        res.send({data});
        
    } catch (error) {
        res.status(500).json({error: "Error occurred while retrieving."})        
    }
};

//Get detail
const getTicketId = async (req, res) => {

    try {
        const id = req.params.id;
        const data = await ticketmodel.findOne({_id:id});

        res.send({data});
        
    } catch (error) {
        res.status(500).json({error: "Error occurred while retrieving."})
    }    
};

//Insert 
const createTicket = async (req, res) => {

    try {
        const { body } = req
        console.log(body)

        const data = await ticketmodel.create(body).then((data) => {
        console.log(data);
        res.status(201).send(data);
        });
        //res.send({data})
        
    } catch (error) {
        res.status(500).json({error: "The Ticket wasn't created"})
    }
};

//Update
const updateTicket = async (req, res) => {

    try {
        const { body } = req
        const id = req.params.id;

        const data = await ticketmodel.findByIdAndUpdate({_id:id}, body).then((data) => {
            console.log(data);
            res.status(204).send(data);
        });
        
    } catch (error) {
        res.status(500).json({error: "The Ticket wasn't Updated"})
    }
};

//Delete
const deleteTicket = async (req, res) => {

    try {
        const id = req.params.id;
        const data = await ticketmodel.deleteOne({_id:id});

        res.send({data});
        
    } catch (error) {
        res.status(500).json({error: "The Ticket wasn't Deleted"})  
    }     
};

module.exports = {
    getTicket,
    getTicketId,
    createTicket,
    updateTicket,
    deleteTicket
}