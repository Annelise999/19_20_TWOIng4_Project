
var AirController = require('../controllers/Air.controller');
var express = require('express');
const router = express.Router();

router.post('/', AirController.ajoutair);
router.get('/', AirController.getlesgazs);


module.exports = router;