var express = require('express');
var mongoose = require ('mongoose');
var tempRouter = require('./temperature.route');
var humRouter = require('./humidity.route');
var airRouter = require('./air.route');

const router = express.Router();

router.use('/api/temp', tempRouter);
router.use('/api/hum', humRouter);
router.use('/api/air', airRouter);



/* GET home page. */
router.get("/", function(req, res) {
  res.send("This is my homepage lol");
});




module.exports = router;
