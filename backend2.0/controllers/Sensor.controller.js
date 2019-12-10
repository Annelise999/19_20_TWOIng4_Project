
var Sensor = require('../model/Sensor.model');
var Measure = require('../model/Measure.model');


class SensorController {
    createSensor(req,res){
        if (!req.body.userId || !req.body.location) {
            res.json({success: false, msg: 'Informations manquantes pour enregistrer le sensor'});
        }else {
            var newSensor = new Sensor({
                location: req.body.location,
                creationDate: Date.now(),
                userID: req.body.userId
            });
           
            newSensor.save((err) => {
                if (err) {
                    console.log(err);
                    return res.json({success: false});
                }
                
                res.json({success: true, msg: 'Sensor créé avec succès'});
                
            });
        }
    }
    async readSensors(req,res){
        if (!req.body.userId) {
            res.json({success: false, msg: 'il faut l id du user'});
        }else {
            try{
                let sensors = await Sensor.find({userID:req.body.userId}).lean().exec();
                return res.json(sensors); 
             
            }
            catch(err){
                return res.json(err);
            } 
            
        }
    }
    graphTemperature(req,res){
        var i = 0;
                if (!req.body.userId) {
                    return res.json({success: false, msg: 'il faut l id du user'});
                }else {
                    Sensor.find({"userID":req.body.userId},(err,sensors)=>{
                        if(err){
                            return res.json(err)
                        }else {
                            sensors.forEach(function(sensor){
                                Measure.find({"sensorID":sensor._id,"type":"temperature"},(err,measures)=>{
                                    if (err){
                                        return res.json(err)
                                    }
                                    else{ 
            
                                        measures.forEach(function(measure){
i++;
        })
                                    }   
                                })
                              });
                            return res.json(i)
                        }
                    });
                }
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
