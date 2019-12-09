var Air = require('../model/Air.model');


class AirController {
    ajoutair(req, res) {
        
        //verification des données
        if (!req.body.name || !req.body.value ) {
            res.json({success: false, msg: 'Informations manquantes pour enregistrer une qualité de l air'});
        }else {
            var newAir= new Air({
                name: req.body.name,
                value: req.body.value,     
            });
           
            newAir.save((err) => {
                if (err) {
                    console.log(err);
                    return res.json({success: false, msg: 'Information existe déja'});
                }
                
                res.json({success: true, msg: 'Qualité de l air créée avec succès'});
                
            });
        }
    } 


    async getlaQuality(req,res){
        
            try{
           const CO2 = await Air.find( { "name" : "CO2" }).sort({"createdAt": -1}).limit(1).exec();
           let O2 = await Air.find( { "name" : "O2" }).sort({"createdAt": -1}).limit(1).exec();
           let N2 = await Air.find( { "name" : "N2" }).sort({"createdAt": -1}).limit(1).exec();
           let autres = await Air.find( { "name" : "autres" }).sort({"createdAt": -1}).limit(1).exec();
           
         
           CO2.concat(O2);
           CO2.concat(N2);
           CO2.conat(autres);

           
           return res.json(CO2); 
        
       }
       catch(err){
           return next(err);
       }    
}

getlesgazs (req,res) {
    Air.findOne({ 
        "name" : "CO2" 
    },{},{ sort: { "createdAt" : -1 } }, (err, co2) => {
        if (err) throw err;

        if (!co2) {
            res.status(404).send({success: false, msg: 'Hors piste non trouvée'});
        } else {
            Air.findOne({ 
                "name" : "O2" 
            },{},{ sort: { "createdAt" : -1 } }, (err, o2) => {
                if (err) throw err;
        
                if (!o2) {
                    res.status(404).send({success: false, msg: 'Hors piste non trouvée'});
                } else {
                    Air.findOne({ 
                        "name" : "N2" 
                    },{},{ sort: { "createdAt" : -1 } }, (err, n2) => {
                        if (err) throw err;
                
                        if (!n2) {
                            res.status(404).send({success: false, msg: 'Hors piste non trouvée'});
                        } else {
                            Air.findOne({ 
                                "name" : "autres" 
                            },{},{ sort: { "createdAt" : -1 } }, (err, autres) => {
                                if (err) throw err;
                        
                                if (!autres) {
                                    res.status(404).send({success: false, msg: 'Hors piste non trouvée'});
                                } else {
                                    var tab=[];
                                    tab.push(co2,o2,n2,autres);
            
                                    res.json(tab);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}










    async getlaquality(req,res){
        try{
          let quality = await Air.aggregate( [ {$unwind : "$CO2"}, {$unwind : "$O2"}, {$unwind : "$N2"}, {$unwind : "$autres"}, { $group : {"_id" : "$mois", "CO2" : {$avg : "$CO2"}, "O2" : {$avg : "$O2"},"N2" : {$avg : "$N2"},"autres" : {$avg : "$autres"} } }] );
           return res.json(quality); 
       }
       catch(err){
           return next(err);
       }    
}
  
    
}

module.exports = new AirController; 
