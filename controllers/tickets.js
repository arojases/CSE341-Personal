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

const data = await ticketmodel.create(body).then((data) => {
    console.log(data);
    res.status(201).send(data);
});
//res.send({data})

};

//Update
const updateTicket = async (req, res) => {

    const { body } = req
    const id = req.params.id;

    const data = await ticketmodel.findByIdAndUpdate({_id:id}, body).then((data) => {
        console.log(data);
        res.status(204).send(data);
    });
    //res.send({data})
};

//Delete
const deleteTicket = async (req, res) => {

    const id = req.params.id;
    const data = await ticketmodel.deleteOne({_id:id});

    res.send({data});
    
};

module.exports = {
    getTicket,
    getTicketId,
    createTicket,
    updateTicket,
    deleteTicket
}