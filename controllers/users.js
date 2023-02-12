const { userModel } = require("../models")
//const { ObjectId } = require("../connection/db");

//Get list
const getItem = async (req, res) => {

    try {
        const data = await userModel.find({});

        res.send({data});        
    } catch (error) {
        res.status(500).json({error: "Error occurred while retrieving."})        
    }   
};

//Get detail
const getItemId = async (req, res) => {

    try {
        const  id  = req.params.id;
        const data = await userModel.findOne({_id:id});

        res.send({data});
        
    } catch (error) {
        res.status(500).json({error: "Error occurred while retrieving."})
    }    
};

//Insert 
const createItem = async (req, res) => {

    try {
        const { body } = req

        const data = await userModel.create(body).then((data) => {
        console.log(data);
        res.status(201).send(data);
    });
    //res.send({data})
        
    } catch (error) {
        res.status(500).json({error: "The User wasn't created"})
    }
};

//Update
const updateItem = async (req, res) => {

    try {
        const { body } = req
        const id = req.params.id;
    
        const data = await userModel.findByIdAndUpdate({_id:id}, body).then((data) => {
            console.log(data);
            res.status(204).send(data);
        });
        
    } catch (error) {
        res.status(500).json({error: "The User wasn't updated"})
    }
};

//Delete
const deleteItem = async (req, res) => {

    try {
        const  id  = req.params.id;
        const data = await userModel.deleteOne({_id:id});

        res.status(200).send({data});
        
    } catch (error) {
        res.status(500).json({error: "The User wasn't deleted"})        
    }
};

module.exports = {
    getItem,
    getItemId,
    createItem,
    updateItem,
    deleteItem
}