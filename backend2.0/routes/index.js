var express = require('express');
var MeasureController = require('../controllers/Measure.controller');
var SensorController = require('../controllers/Sensor.controller');
var UserController = require('../controllers/User.controller');

const router = express.Router();

//users
router.post('/api/user',UserController.createUser);
router.get('/api/user',UserController.readCurrentUser);//get le current
router.get('/api/user/all',UserController.readAllUsers);//tous les users 
router.get('/api/user/sensors',UserController.readSensorsNumber);//nombre de sensors 

//sensors
router.post('/api/sensor',SensorController.createSensor);
router.get('/api/sensor',SensorController.readSensors);//tous les sensors d'un user
router.get('/api/sensor/temperature',SensorController.graphTemperature);//toutes les infos temperature 
router.get('/api/sensor/humidity',SensorController.graphHumidity);//toutes les infos humidité
router.get('/api/sensor/pollution',SensorController.graphPollution);//toutes les infos pollution
router.get('/api/sensor/max',SensorController.max);//maximum des mesures

//measures
router.post('/api/measure',MeasureController.createMeasure);

module.exports = router;
