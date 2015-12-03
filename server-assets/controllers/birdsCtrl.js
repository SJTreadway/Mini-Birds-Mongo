var mongoose = require('mongoose');
var birdSchema = require('../models/bird');
var Bird = mongoose.model('Bird', birdSchema);

module.exports = {
	addBird: function(req, res) {
		var newBird = new Bird(req.body);
		newBird.save().then(function(result) {
			return res.send('bird added');
		});
	},

	getBirds: function(req, res) {
		Bird.find(req.query).exec().then(function(result) {
			return res.json(result);
		});
	},
};