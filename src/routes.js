const express = require('express');
const petsController = require('./controllers');
const addModels = require('./middleware/add-models');

const router = express.Router();

router.use(addModels);

router.post('/pets', petsController.create);
router.get('/pets', petsController.list);

module.exports = router;