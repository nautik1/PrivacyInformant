'use strict';
module.exports = function(app) {
    var privacyInformant = require('../controllers/privacyInformantController');

    var apiSubFolder = '/rest';

    // privacyInformant Routes
    app.route(apiSubFolder + '/services')
        .get(privacyInformant.list_all_services)


    app.route(apiSubFolder + '/services/:eventId')
        .get(privacyInformant.display_a_service);
};
