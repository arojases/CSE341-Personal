const { check } = require("express-validator");
const validateResults = require("../utils/HandleValidator")

const createUserValidation = [

    check("id").exists().notEmpty().isMongoId(),
    check("firstName").exists().notEmpty(),
    check("lastName").exists().notEmpty(),
    check("email").exists().notEmpty(),
    check("birthday").exists().notEmpty(),
    check("password").exists().notEmpty(),
    check("phone").exists().notEmpty(),
    check("address").exists().notEmpty(),

    (req, res, next) => {
        return validateResults(req, res, next)
    }


]

module.exports = { createUserValidation };