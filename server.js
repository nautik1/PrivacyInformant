var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Event = require('./api/models/privacyInformantModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/PrivacyInformantDB', {
    useMongoClient: true,
    /* other options */
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static('front'));
app.use(express.static('front/app'));

var routes = require('./api/routes/privacyInformantRoutes'); //importing route

routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('PrivacyInformant RESTful API server started on: ' + port);
