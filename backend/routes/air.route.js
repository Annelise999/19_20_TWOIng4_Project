import airController from '../Controller/air.controller';
import express from 'express';
const router = express.Router();

router.post('/', airController.ajouthumidity);
router.get('/:nom', airController.getlemassif);
router.get('/', airController.getlesmassifs);


export default router;