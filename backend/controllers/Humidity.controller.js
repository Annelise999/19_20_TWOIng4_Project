var Humidity = require('../model/Humidity.model');


class HumidityController {
    ajouthumidity(req, res) {
        
        //verification des données
        if (!req.body.valeur || !req.body.jour || !req.body.mois || !req.body.annee) {
            res.json({success: false, msg: 'Informations manquantes pour enregistrer une valeur humidité'});
        }else {
            var newHumidity = new Humidity({
                valeur: req.body.valeur,
                jour: req.body.jour,
                mois: req.body.mois,
                annee: req.body.annee
            });
           
            newHumidity.save((err) => {
                if (err) {
                    console.log(err);
                    return res.json({success: false, msg: 'Cette humidité existe déja'});
                }
                
                res.json({success: true, msg: 'Humidité créée avec succès'});
                
            });
        }
    } 


    async getleshumidities(req,res){
        try{

          //let temperatures = await Temperature.find(
            //  {"valeur":{$gt:10 }},{"mois":1, "valeur":1}).lean().exec();
           
           // let temperatures = await Temperature.distinct("mois").lean().exec();

           let humidities = await Humidity.aggregate( [ {$unwind : "$valeur"}, { $group : {"_id" : "$mois", "moyenne" : {$avg : "$valeur"} } }] );
           return res.json(humidities); 
       }
       catch(err){
           return next(err);
       }    
}
  
    
}

module.exports = new HumidityController; 
