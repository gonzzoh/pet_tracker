const Pets = require('../db/models/pets');

const addModels = (req, res, next) => {
    req.Pets = Pets;
    next();
}

module.exports = addModels;