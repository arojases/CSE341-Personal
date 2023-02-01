const mongoose = require("mongoose");
mongoose.set('strictQuery', false)

const dbConnect = () => {

    URI = process.env.URI;
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true        
    }, 
    (err, res) => {
        if(!err){
            console.log("***** Successful Connection *****")
        }else {
            console.log("***** Connection Error *****")
        }
    });
};

module.exports = dbConnect;