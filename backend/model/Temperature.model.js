import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const TemperatureSchema = new Schema({  
    valeur: {
      type: int,
      required: true
    },
    jour: {
      type: int,
      required: true
    },
    mois: {
      type: String,
      required: true
    },
    annee: {
      type: int,
      required: true
    }
  },
  {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  });
  
  module.exports = mongoose.model('Temperature', TemperatureSchema);  

