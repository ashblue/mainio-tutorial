'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EntrySchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        trim: true
    },
    complete: {
        type: Boolean
    }
});

mongoose.model('Entry', EntrySchema);