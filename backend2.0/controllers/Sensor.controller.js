
var Sensor = require('../model/Sensor.model');
var Measure = require('../model/Measure.model');
const querystring = require('querystring');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

class SensorController {
    createSensor(req, res) {
        if (!req.body.userId || !req.body.location) {
            res.json({ success: false, msg: 'Informations manquantes pour enregistrer le sensor' });
        } else {
            var newSensor = new Sensor({
                location: req.body.location,
                creationDate: Date.now(),
                userID: req.body.userId
            });

            newSensor.save((err) => {
                if (err) {
                    console.log(err);
                    return res.json({ success: false });
                }

                res.json({ success: true, msg: 'Sensor créé avec succès' });

            });
        }
    }
    async readSensors(req, res) {
        if (!req.query.userId) {
            res.json({ success: false, msg: 'il faut l id du user' });
        } else {
            try {
                let sensors = await Sensor.find({ userID: req.query.userId }).lean().exec();
                return res.json(sensors);

            }
            catch (err) {
                return res.json(err);
            }

        }
    }
    async graphTemperature(req, res) {
        var data = {
            "Janvier":0,
            "Fevrier":0,
            "Mars":0,
            "Avril":0,
            "Mai":0,
            "Juin":0,
            "Juillet":0,
            "Aout":0,
            "Septembre":0,
            "Octobre":0,
            "Novembre":0,
            "Decembre":0,
            "Jan":0,
            "Fev":0,
            "Mar":0,
            "Avr":0,
            "Ma":0,
            "Jui":0,
            "Juil":0,
            "Aou":0,
            "Sep":0,
            "Oct":0,
            "Nov":0,
            "Dec":0
        }
         var allmeasures =[];
            
        if (!req.body.userId) {
            return res.json({ success: false, msg: 'il faut l id du user' });
        } else {
            Sensor.find({ "userID": req.body.userId }, async (err, sensors) => {
                if (err) {
                    return res.json(err)
                } else {
                    await asyncForEach(sensors, async (sensor) => {

                        let measures = await Measure.find({"sensorID":sensor._id,"type":"temperature"}).lean().exec();
                               await asyncForEach(measures, async (measure) => {
                                    
                                    console.log(measure);
                                   
                                    allmeasures.push(measure, sensor.location);
                                })
                            
                        
                    });

                    res.json(allmeasures);

                }
            });
        }
    }

    graphHumidity(req, res) {
        res.json("ok");
    }
    graphPollution(req, res) {
        res.json("ok");
    }
    max(req, res) {
        res.json("ok");
    }

}

module.exports = new SensorController; 
