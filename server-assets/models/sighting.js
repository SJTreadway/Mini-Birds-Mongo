var mongoose = require('mongoose'),
    birdSchema = require('./bird');

var sightingSchema = new mongoose.Schema({
  user: {type: String, ref: 'User'},
  bird: [birdSchema],
  confirmed: {type: Boolean},
  numberSeen: {type: Number, min: 1}, 
});

module.exports = mongoose.model('Sighting', sightingSchema);
