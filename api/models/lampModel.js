'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LampSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the lamp'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Lamps', LampSchema);
