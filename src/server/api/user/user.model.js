'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    sc_id: Number,
    username: String,
    uri: String,
    first_name: String,
    last_name: String,
    full_name: String,
    avatar_url: String
});

module.exports = mongoose.model('User', UserSchema);
