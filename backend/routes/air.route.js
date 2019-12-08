var AirController =require ("../Controller/Air.controller");
var express = require ("express");
const router = express.Router();

router.post('/', AirController.ajouthumidity);
router.get('/:nom', AirController.getlemassif);
router.get('/', AirController.getlesmassifs);


export default router;