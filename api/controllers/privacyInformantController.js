'use strict';
var mongoose = require('mongoose'),
    Service = mongoose.model('Services');

exports.list_all_services = function(req, res) {
    Service.find({}, function(err, service) {
        if (err)
            res.send(err);
        res.json(service);
    });
};

exports.display_a_service = function(req, res) {
    Service.findById(req.params.serviceId, function(err, service) {
        if (err)
            res.send(err);
        res.json(service);
    });
};
