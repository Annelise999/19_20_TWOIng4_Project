var mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const MeasureSchema = new Schema({  
    type: {
      type: String,
      required: true
    },
    creationDate: {
      type: Date,
      required: true
    },
    sensorID: {
      type: ObjectId,
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
  
  module.exports = mongoose.model('Measure', MeasureSchema);  

