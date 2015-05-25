'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  user: Object
});

module.exports = mongoose.model('User', UserSchema);
