
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
        if (!req.body.userId) {
            res.json({ success: false, msg: 'il faut l id du user' });
        } else {
            try {
                let sensors = await Sensor.find({ userID: req.body.userId }).lean().exec();
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

        if (!req.query.userId) {
            return res.json({ success: false, msg: 'il faut l id du user' });
        } else {
            Sensor.find({ "userID": req.query.userId }, async (err, sensors) => {
                if (err) {
                    return res.json(err)
                } else {
                    await asyncForEach(sensors, async (sensor) => {

                        // aggregate( [ {$unwind : "$valeur"}, { $group : {"_id" : "$mois", "moyenne" : {$avg : "$valeur"} } }] );


                        let measures = await Measure.find({ "sensorID": sensor._id, "type": "temperature" }).lean().exec();
                        await asyncForEach(measures, async (measure) => {
                            var dt = new Date(measure.creationDate);
                            var dtm = dt.getMonth();
                            if (dtm == 0) {
                                data.Jan++;
                                data.Janvier += measure.value;
                            } else if (dtm == 1) {
                                data.Fev++;
                                data.Fevrier += measure.value;
                            } else if (dtm == 2) {
                                data.Mar++;
                                data.Mars += measure.value;
                            } else if (dtm == 3) {
                                data.Avr++;
                                data.Avril += measure.value;
                            } else if (dtm == 4) {
                                data.Ma++;
                                data.Mai += measure.value;
                            } else if (dtm == 5) {
                                data.Jui++;
                                data.Juin += measure.value;
                            } else if (dtm == 6) {
                                data.Juil++;
                                data.Juillet += measure.value;
                            } else if (dtm == 7) {
                                data.Aou++;
                                data.Aout += measure.value;
                            } else if (dtm == 8) {
                                data.Sep++;
                                data.Septembre += measure.value;
                            } else if (dtm == 9) {
                                data.Oct++;
                                data.Octobre += measure.value;
                            } else if (dtm == 10) {
                                data.Nov++;
                                data.Novembre += measure.value;
                            } else if (dtm == 11) {
                                data.Dec++;
                                data.Decembre += measure.value;
                            }

                        })
                    });

                    if(data.Jan > 0){
                        data.Janvier = data.Janvier / data.Jan
                    }
                    if(data.Fev > 0){
                        data.Fevrier = data.Fevrier / data.Fev
                    }
                    if(data.Mar > 0){
                        data.Mars = data.Mars / data.Mar
                    }
                    if(data.Avr > 0){
                        data.Avril = data.Avril / data.Avr
                    }
                    if(data.Ma > 0){
                        data.Mai = data.Mai / data.Ma
                    }
                    if(data.Jui > 0){
                        data.Juin = data.Juin / data.Jui
                    }
                    if(data.Juil > 0){
                        data.Juillet = data.Juillet / data.Juil
                    }
                    if(data.Aou > 0){
                        data.Aout = data.Aout / data.Aou
                    }
                    if(data.Sep > 0){
                        data.Septembre = data.Septembre / data.Sep
                    }
                    if(data.Oct > 0){
                        data.Octobre = data.Octobre / data.Oct
                    }
                    if(data.Nov > 0){
                        data.Novembre = data.Novembre / data.Nov
                    }
                    if(data.Dec > 0){
                        data.Decembre = data.Decembre / data.Dec
                    }

                    res.json(data);

                }
            });
        }
    }

    graphHumidity(req, res) {
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

        if (!req.query.userId) {
            return res.json({ success: false, msg: 'il faut l id du user' });
        } else {
            Sensor.find({ "userID": req.query.userId }, async (err, sensors) => {
                if (err) {
                    return res.json(err)
                } else {
                    await asyncForEach(sensors, async (sensor) => {

                        // aggregate( [ {$unwind : "$valeur"}, { $group : {"_id" : "$mois", "moyenne" : {$avg : "$valeur"} } }] );


                        let measures = await Measure.find({ "sensorID": sensor._id, "type": "humidity" }).lean().exec();
                        await asyncForEach(measures, async (measure) => {
                            var dt = new Date(measure.creationDate);
                            var dtm = dt.getMonth();
                            if (dtm == 0) {
                                data.Jan++;
                                data.Janvier += measure.value;
                            } else if (dtm == 1) {
                                data.Fev++;
                                data.Fevrier += measure.value;
                            } else if (dtm == 2) {
                                data.Mar++;
                                data.Mars += measure.value;
                            } else if (dtm == 3) {
                                data.Avr++;
                                data.Avril += measure.value;
                            } else if (dtm == 4) {
                                data.Ma++;
                                data.Mai += measure.value;
                            } else if (dtm == 5) {
                                data.Jui++;
                                data.Juin += measure.value;
                            } else if (dtm == 6) {
                                data.Juil++;
                                data.Juillet += measure.value;
                            } else if (dtm == 7) {
                                data.Aou++;
                                data.Aout += measure.value;
                            } else if (dtm == 8) {
                                data.Sep++;
                                data.Septembre += measure.value;
                            } else if (dtm == 9) {
                                data.Oct++;
                                data.Octobre += measure.value;
                            } else if (dtm == 10) {
                                data.Nov++;
                                data.Novembre += measure.value;
                            } else if (dtm == 11) {
                                data.Dec++;
                                data.Decembre += measure.value;
                            }

                        })
                    });

                    if(data.Jan > 0){
                        data.Janvier = data.Janvier / data.Jan
                    }
                    if(data.Fev > 0){
                        data.Fevrier = data.Fevrier / data.Fev
                    }
                    if(data.Mar > 0){
                        data.Mars = data.Mars / data.Mar
                    }
                    if(data.Avr > 0){
                        data.Avril = data.Avril / data.Avr
                    }
                    if(data.Ma > 0){
                        data.Mai = data.Mai / data.Ma
                    }
                    if(data.Jui > 0){
                        data.Juin = data.Juin / data.Jui
                    }
                    if(data.Juil > 0){
                        data.Juillet = data.Juillet / data.Juil
                    }
                    if(data.Aou > 0){
                        data.Aout = data.Aout / data.Aou
                    }
                    if(data.Sep > 0){
                        data.Septembre = data.Septembre / data.Sep
                    }
                    if(data.Oct > 0){
                        data.Octobre = data.Octobre / data.Oct
                    }
                    if(data.Nov > 0){
                        data.Novembre = data.Novembre / data.Nov
                    }
                    if(data.Dec > 0){
                        data.Decembre = data.Decembre / data.Dec
                    }

                    res.json(data);

                }
            });
        }
    }


    graphPollution(req, res) {

        var data = [];
        if (!req.query.userId) {
            return res.json({ success: false, msg: 'il faut l id du user' });
        } else {
            Sensor.find({ "userID": req.query.userId }, async (err, sensors) => {
                if (err) {
                    return res.json(err)
                } else {
                    await asyncForEach(sensors, async (sensor) => {
   /* let measures = await Measure.aggregate( [
                            { $match : {
                                "sensorID":sensor._id,
                                "type": "airPollution"
                            }},
                            { $sort : {
                                "value": 1
                            }}
                        ] )*/
                        //let measures = await Measure.find({ "sensorID": sensor._id, "type": "airPollution" }).sort { "createdAt" : -1 } }.lean().exec();
                let measures = await Measure.find({ "sensorID": sensor._id, "type": "airPollution" }).exec();

                        await asyncForEach(measures, async (measure) => {
                          
                            data.push(measure);
                            
                        })
                    });
                    data.sort(function(a,b){
                        // Turn your strings into dates, and then subtract them
                        // to get a value that is either negative, positive, or zero.
                        return new Date(b.creationDate) - new Date(a.creationDate);
                      });
                      res.json(data[0]);

                }
            });
        }
    }


    max(req, res) {
        var data = [];
        if (!req.query.userId) {
            return res.json({ success: false, msg: 'il faut l id du user' });
        } else {
            Sensor.find({ "userID": req.query.userId }, async (err, sensors) => {
                if (err) {
                    return res.json(err)
                } else {
                    await asyncForEach(sensors, async (sensor) => {
  
                let measures = await Measure.find({ "sensorID": sensor._id, "type": "airPollution" }).exec();

                        await asyncForEach(measures, async (measure) => {
                          
                            data.push(measure);
                            
                        })
                    });
                    data.sort(function(a,b){
                        // Turn your strings into dates, and then subtract them
                        // to get a value that is either negative, positive, or zero.
                        return new Date(b.creationDate) - new Date(a.creationDate);
                      });
                      res.json(data[0]);

                }
            });
        }
    }
    }



module.exports = new SensorController; 
