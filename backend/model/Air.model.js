
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const AirSchema = new Schema({  
    CO2: {
      type: int,
      required: true
    },
    O2: {
      type: int,
      required: true
    },
    N2: {
      type: int,
      required: true
    },
    autres: {
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
  
  module.exports = mongoose.model('Air', AirSchema);  