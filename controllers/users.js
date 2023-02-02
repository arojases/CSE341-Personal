const { userModel } = require("../models")

//Get list
const getItem = async (req, res) => {

    const data = await userModel.find({});

    res.send({data});

};

//Get detail
const getItemId = (req, res) => {};

//Insert 
const createItem = async (req, res) => {

const { body } = req
console.log(body)

const data = await userModel.create(body)
res.send({data})

};

//Update
const updateItem = (req, res) => {};

//Delete
const deleteItem = (req, res) => {};

module.exports = {
    getItem,
    getItemId,
    createItem,
    updateItem,
    deleteItem
}