var HumidityController =require ("../Controller/Humidity.controller");
var express = require ("express");
const router = express.Router();

router.post('/', HumidityController.ajouthumidity);
router.get('/:nom', HumidityController.getlemassif);
router.get('/', HumidityController.getlesmassifs);


export default router;