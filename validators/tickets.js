const validator = require('../utils/validate');

const saveTicket = (req, res, next) => {
  const validationRule = {
    origin: 'required|string',
    destination: 'required|string',
    departure: 'required|string',
    return: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
    saveTicket
};