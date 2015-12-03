var mongoose = require('mongoose');
var sightingSchema = require('../models/sighting');
var Sighting = mongoose.model('Sighting', sightingSchema);

module.exports = {
	addSighting: function(req, res) {
	  var sighting = new Sighting(req.body);
	  sighting.save().then(function(result) {
	    return res.status(201).end();
	  })
	},
	getSightings: function(req, res) {
	  Sighting
	  .find(req.query)
	  .exec().then(function(sightings) {
	    return res.json(sightings);
	  })
	},
	editSighting: function(req, res) {
	  Sighting.update({_id: req.query.id}, req.body).then(function() {
	    return res.status(200).end();
	  });
	},
	deleteSighting: function(req, res) {
	  Sighting.remove({_id: req.query.id}, req.body).then(function() {
	    return res.status(200).end();
	  });
	},
};