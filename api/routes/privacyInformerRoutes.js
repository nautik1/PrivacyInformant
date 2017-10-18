'use strict';
module.exports = function(app) {
    var privacyInformer = require('../controllers/privacyInformerController');

    var apiSubFolder = '/rest';

    // privacyInformer Routes
    app.route(apiSubFolder + '/services')
        .get(privacyInformer.list_all_services)


    app.route(apiSubFolder + '/services/:eventId')
        .get(privacyInformer.display_a_service);
};
