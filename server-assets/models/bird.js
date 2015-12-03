var mongoose = require('mongoose');

var birdSchema = new mongoose.Schema({
	name: {type: String, required: true},
	order: {type: String},
	status: {type: String, enum: ['extinct', 'extant']},
});

module.exports = birdSchema;