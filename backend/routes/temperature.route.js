var TemperatureController  =require ("../Controller/Temperature.controller");
var express = require ("express");
const router = express.Router();

router.post('/', TemperatureController.ajouttemperature);
router.get('/:nom', TemperatureController.getlatemperature);
router.get('/', TemperatureController.getlestemperature);

export default router;