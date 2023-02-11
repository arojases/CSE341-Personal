const { validationResult } = require("express-validator");

const validatorResults = (req, res, next) => {

    try {
        validationResult(req).throw();
        return next();    //Continue to controller
    } catch (err) {
        res.status(403);
        res.send({ errors: error.array() });    
    }
};

module.exports = validatorResults;