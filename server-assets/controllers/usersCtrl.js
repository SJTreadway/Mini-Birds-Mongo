var mongoose = require('mongoose');
var User = require('../models/user');

module.exports = {
	addUser: function(req, res) {
		var newUser = new User(req.body);
		newUser.save().then(function(result) {
			return res.send('user added');
		});
	},

	getUsers: function(req, res) {
		User.find(req.query).exec().then(function(result) {
			return res.json(result);
		});
	},
};