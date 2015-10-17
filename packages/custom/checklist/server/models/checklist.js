'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ChecklistSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    entries: [{
        type: Schema.ObjectId,
        ref: 'Entry'
    }]
});

/**
 * Validations
 */
ChecklistSchema.path('title').validate(function(title) {
    return !!title;
}, 'Title cannot be blank');

ChecklistSchema.path('user').validate(function(user) {
    return !!user;
}, 'A user ID must be provided');

/**
 * Statics
 */
ChecklistSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').populate('entries').exec(cb);
};

mongoose.model('Checklist', ChecklistSchema);