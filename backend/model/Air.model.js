
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const AirSchema = new Schema({  
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  });
  
  module.exports = mongoose.model('Air', AirSchema);  