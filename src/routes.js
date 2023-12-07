const express = require('express');
const petsController = require('./controllers');
const addModels = require('./middleware/add-models');

const router = express.Router();

router.use(addModels);

router.get('/pets', petsController.list);
router.post('/pets', petsController.create);

module.exports = router;