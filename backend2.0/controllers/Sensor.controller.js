

var Sensor = require('../model/Sensor.model');


class SensorController {
    createSensor(req,res){
        res.json("ok");
    }
    readSensors(req,res){
        res.json("ok");
    }
    graphTemperature(req,res){
        res.json("ok");
    }
    graphHumidity(req,res){
        res.json("ok");
    }
    graphPollution(req,res){
        res.json("ok");
    }
    max(req,res){
        res.json("ok");
    }
    
}

module.exports = new SensorController; 
