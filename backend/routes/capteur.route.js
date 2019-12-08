import capteurController from '../Controller/temperature.controller';
import express from 'express';
const router = express.Router();

router.post('/', capteurController.ajoutcapteur);
router.get('/:nom', capteurController.getlecapteur);
router.get('/', capteurController.getlescapteur);

export default router;