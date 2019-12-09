var express = require('express');
var mongoose = require ('mongoose');
var MeasureRouter = require('./measure.route');
var SensorRouter = require('./sensor.route');
var UserRouter = require('./user.route');

const router = express.Router();

router.use('/api/meas', MeasureRouter);
router.use('/api/sens', SensorRouter);
router.use('/api/user', UserRouter);



/* GET home page. */
router.get("/", function(req, res) {
  res.send("This is my homepage lol");
});




module.exports = router;
