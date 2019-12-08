var express = require('express');
var tempRouter = require('./temperature.route');
var humidityRouter = require('./humidity.route');
var airRouter = require('./air.route');
var mongoose = require('mongoose')
var Router = require('./routes');
const router = express.Router();

router.use('/api/temp', tempRouter);
router.use('/api/humidity', humidityRouter);
router.use('/api/capteur', capteurRouter);
router.use('/api/air', airRouter);


/* GET home page. */
router.get("/", function(req, res) {
  res.send("This is my homepage lol");
});




module.exports = router;
