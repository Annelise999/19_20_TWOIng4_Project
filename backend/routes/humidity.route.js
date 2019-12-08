import humidityController from '../Controller/humidity.controller';
import express from 'express';
const router = express.Router();

router.post('/', humidityController.ajouthumidity);
router.get('/:nom', humidityController.getlemassif);
router.get('/', humidityController.getlesmassifs);


export default router;