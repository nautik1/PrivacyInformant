'use strict';
var express = require('express'),
router = express.Router();

var privacyInformant = require('../controllers/privacyInformantController');

// privacyInformant Routes
router.route('/services')
    .get(privacyInformant.list_all_services)


router.route('/services/:eventId')
    .get(privacyInformant.display_a_service);

module.exports = router;
