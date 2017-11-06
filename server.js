var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Event = require('./api/models/privacyInformantModel'),
    restRouter = require('./api/routes/restRouter')
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/PrivacyInformantDB', {
    useMongoClient: true,
    /* other options */
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Serve angular application in front
app.use(express.static('front'));

// Register router with routes to app
app.use('/rest', restRouter);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('PrivacyInformant RESTful API server started on: ' + port);
