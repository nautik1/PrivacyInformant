'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the name of the service'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['not_validated', 'available', 'unavailable']
        }],
        default: ['not_validated']
    }
});

module.exports = mongoose.model('Services', ServiceSchema);
