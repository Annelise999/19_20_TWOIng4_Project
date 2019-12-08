import express from 'express';
var express = require("express");
const router = express.Router();


import indexRouter from './index.route';
import tempRouter from './temp.route';
import humidityRouter from './humidity.route';
import capteurRouter from './capteur.route';
import airRouter from './air.route';


router.use('/', indexRouter);
router.use('/api/temp', tempRouter);
router.use('/api/humidity', humidityRouter);
router.use('/api/capteur', capteurRouter);
router.use('/api/air', airRouter);






module.exports = router;
