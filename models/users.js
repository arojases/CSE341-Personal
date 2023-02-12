const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    id: {
        type: mongoose.Types.ObjectId
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    birthday: {
        type: Date
    },
    password: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    }

}, 
{
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false 
})

module.exports = mongoose.model("users", UserSchema)