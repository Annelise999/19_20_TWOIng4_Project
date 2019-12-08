var express = require('express');
var mongoose = require ('mongoose');
var tempRouter = require('./temperature.route');

const router = express.Router();

router.use('/api/temp', tempRouter);



/* GET home page. */
router.get("/", function(req, res) {
  res.send("This is my homepage lol");
});




module.exports = router;
