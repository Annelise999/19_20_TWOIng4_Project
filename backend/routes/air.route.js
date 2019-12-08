import AirController from '../controllers/Air.controller';
import express from 'express';
const router = express.Router();

router.post('/', AirController.ajouthumidity);
router.get('/:nom', AirController.getlemassif);
router.get('/', AirController.getlesmassifs);


export default router;