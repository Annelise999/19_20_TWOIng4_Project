import CapteurController from '../Controller/Capteur.controller';
import express from 'express';
const router = express.Router();

router.post('/', CapteurController.ajoutcapteur);
router.get('/:nom', CapteurController.getlecapteur);
router.get('/', CapteurController.getlescapteur);

export default router;