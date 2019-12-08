var mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const HumiditySchema = new Schema({  
    valeur: {
      type: Number,
      required: true
    },
    jour: {
      type: Number,
      required: true
    },
    mois: {
      type: String,
      required: true
    },
    annee: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  });
  
  module.exports = mongoose.model('Humidity', HumiditySchema);  

