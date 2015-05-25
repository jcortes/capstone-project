'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  user: Schema.Types.Mixed
});

module.exports = mongoose.model('User', UserSchema);
