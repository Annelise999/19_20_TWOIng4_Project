var CapteurController = require("../Controller/Capteur.controller");
var express = require ("express");
const router = express.Router();

router.post('/', CapteurController.ajoutcapteur);
router.get('/:nom', CapteurController.getlecapteur);
router.get('/', CapteurController.getlescapteur);

module.exports = router;