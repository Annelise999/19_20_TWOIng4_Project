var mongoose = require('mongoose');
const Schema = mongoose.Schema , ObjectId = Schema.ObjectId;
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
  });
  
  module.exports = mongoose.model('Sensor', SensorSchema);  