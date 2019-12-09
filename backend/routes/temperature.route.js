
var TemperatureController = require('../controllers/Temperature.controller');
var express = require('express');

const router = express.Router();

router.post('/', TemperatureController.AjoutTemperature);
//router.get('/', TemperatureController.getlatemperature);
router.get('/', TemperatureController.getlestemperatures);

module.exports = router;