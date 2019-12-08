import TemperatureController from '../Controller/Temperature.controller';
import express from 'express';
const router = express.Router();

router.post('/', TemperatureController.ajouttemperature);
router.get('/:nom', TemperatureController.getlatemperature);
router.get('/', TemperatureController.getlestemperature);

export default router;