var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Event = require('./api/models/privacyInformerModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/PrivacyInformerDB', {
    useMongoClient: true,
    /* other options */
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static('front'));

var routes = require('./api/routes/privacyInformerRoutes'); //importing route

routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('PrivacyInformer RESTful API server started on: ' + port);
