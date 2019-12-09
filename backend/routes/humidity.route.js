
var HumidityController = require('../controllers/Humidity.controller');
var express = require('express');
const router = express.Router();

router.post('/', HumidityController.ajouthumidity);
router.get('/', HumidityController.getleshumidities);
//router.get('/', HumidityController.getlesmassifs);


module.exports = router;