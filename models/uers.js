let mongoose = require('../config/mongoose'); 
let models = {};

const Schema = mongoose.Schema; 
 
const setScore = new Schema({
  username: String,
  score: {
      type:Number,
      default:0  
  },
  class:Number,
  date: Date
});


models.setScoreModel = mongoose.model('setScore',setScore);
