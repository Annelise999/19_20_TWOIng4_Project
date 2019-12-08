
import Temperature from "../model/Temperature.model";
const querystring = require('querystring');


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
                annnee: req.body.annee
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
    
    GetTemperature(req,res) {
        Temperature.findOne({
            nom: req.params.nom
        }, (err, horspiste) => {
            if (err) throw err;

            if (!horspiste) {
                res.status(404).send({success: false, msg: 'Hors piste non trouvée'});
            } else {
                res.json(horspiste);
            }
        });
    }
    
    async getleshorspistes(req,res){
             try{
                let horspistes = await HorsPiste.find().lean().exec();
                return res.json(horspistes); 
            }
            catch(err){
                return next(err);
            }    
    }
    
}

export default new TemperatureController();