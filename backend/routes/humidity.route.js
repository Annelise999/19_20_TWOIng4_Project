import HumidityController from '../controllers/Humidity.controller';
import express from 'express';
const router = express.Router();

router.post('/', HumidityController.ajouthumidity);
router.get('/:nom', HumidityController.getlemassif);
router.get('/', HumidityController.getlesmassifs);


export default router;