const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema({

    id: {
        type: mongoose.Types.ObjectId
    },
    origin: {
        type: String
    },
    destination: {
        type: String
    },
    departure: {
        type: Date
    },
    return: {
        type: Date
    }

}, {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false
})

module.exports = mongoose.model("tickets", ticketSchema)