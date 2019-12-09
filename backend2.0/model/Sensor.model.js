var mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const SensorSchema = new Schema({  
    creationDate: {
        type: Date,
        required: true
      },
    location: {
      type: String,
      required: true
    },
    userID: {
      type: ObjectId,
      required: true
    }
  },
  {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  });
  
  module.exports = mongoose.model('Sensor', SensorSchema);  