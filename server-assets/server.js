var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	port = 9001,
	app = express(),
	usersCtrl = require('./controllers/usersCtrl.js'),
	birdsCtrl = require('./controllers/birdsCtrl.js'),
	sightingsCtrl = require('./controllers/sightingsCtrl.js');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+'/public'));


app.post('/api/user', usersCtrl.addUser);
app.get('/app/user', usersCtrl.getUsers);

app.post('/api/bird', birdsCtrl.addBird);
app.get('/api/bird', birdsCtrl.getBirds);

app.post('/api/sightings', sightingsCtrl.addSighting);
app.get('/api/sightings', sightingsCtrl.getSightings);
app.put('/api/sightings', sightingsCtrl.editSighting);
app.delete('/api/sightings', sightingsCtrl.deleteSighting);

mongoose.connect('mongodb://localhost/birdSightings');
mongoose.connection.once('open', function() {
  console.log('Mongo connected');
});
app.listen(port, function() {
  console.log('Listening on port', port);
});
