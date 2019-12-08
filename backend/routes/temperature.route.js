import temperatureController from '../Controller/temperature.controller';
import express from 'express';
const router = express.Router();

router.post('/', temperatureController.ajouttemperature);
router.get('/:nom', temperatureController.getlatemperature);
router.get('/', temperatureController.getlestemperature);

export default router;