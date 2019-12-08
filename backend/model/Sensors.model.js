var mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const SensorsSchema = new Schema({  
    nom: {
      type: String,
      required: true
    },
    valeur: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  });
  
  module.exports = mongoose.model('Sensors', SensorsSchema);  

