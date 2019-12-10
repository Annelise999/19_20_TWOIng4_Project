var Measure = require('../model/Measure.model');


class MeasureController {
    createMeasure(req,res){
        if (!req.body.type || !req.body.sensorId || !req.body.value) {
            res.json({success: false, msg: 'Informations manquantes pour enregistrer la mesure'});
        }else {
            var newMeasure = new Measure({
                type: req.body.type,
                creationDate: Date.now(),
                sensorID: req.body.sensorId,
                value: req.body.value
            });
           
            newMeasure.save((err) => {
                if (err) {
                    console.log(err);
                    return res.json({success: false});
                }
                
                res.json({success: true, msg: 'mesure créée avec succès'});
                
            });
        }
    }
  
    
}

module.exports = new MeasureController; 
