

var Temperature = require('../model/Temperature.model');


class TemperatureController {
    AjoutTemperature(req, res) {
        
        //verification des données
        if (!req.body.valeur || !req.body.jour || !req.body.mois || !req.body.annee) {
            res.json({success: false, msg: 'Informations manquantes pour enregistrer une temperature'});
        }else {
            var newTemperature = new Temperature({
                valeur: req.body.valeur,
                jour: req.body.jour,
                mois: req.body.mois,
                annee: req.body.annee
            });
           
            newTemperature.save((err) => {
                if (err) {
                    console.log(err);
                    return res.json({success: false, msg: 'Cette Temperature existe déja'});
                }
                
                res.json({success: true, msg: 'Temperature créée avec succès'});
                
            });
        }
    } 


    async getlestemperatures(req,res){
        try{

          //let temperatures = await Temperature.find(
            //  {"valeur":{$gt:10 }},{"mois":1, "valeur":1}).lean().exec();
           
           // let temperatures = await Temperature.distinct("mois").lean().exec();

           let temperatures = await Temperature.aggregate( [ {$unwind : "$valeur"}, { $group : {"_id" : "$mois", "moyenne" : {$avg : "$valeur"} } }] );
           return res.json(temperatures); 
       }
       catch(err){
           return next(err);
       }    
}


    
    
    async getlestemperature(req,res){
             try{
                let temperatures = await Temperature.find().lean().exec();
                return res.json(temperatures); 
             
            }
            catch(err){
                return next(err);
            }    
    }
    
}

module.exports = new TemperatureController; 
