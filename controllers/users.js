const { userModel } = require("../models")
const {  ObjectId } = require("../connection/db");

//Get list
const getItem = async (req, res) => {

    const data = await userModel.find({});

    res.send({data});

};

//Get detail
const getItemId = async (req, res) => {

    const  id  = req.params.id;
    const data = await userModel.findOne({_id:id});

    res.send({data});
};

//Insert 
const createItem = async (req, res) => {

    const { body } = req
    //console.log(body)

    const data = await userModel.create(body).then((data) => {
        console.log(data);
        res.status(201).send(data);
    });
    //res.send({data})

};

//Update
const updateItem = async (req, res) => {


    //const { body } = req
    //console.log(body)
    const { id } = req;

    const data = await userModel.findByIdAndUpdate(id)
    res.send({data})

};

//Delete
const deleteItem = async (req, res) => {

    const  id  = req.params.id;
    const data = await userModel.deleteOne({_id:id});

    res.send({data});

};

module.exports = {
    getItem,
    getItemId,
    createItem,
    updateItem,
    deleteItem
}