'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LampSchema = new Schema({
  name: {
    type: String,
    required: 'Ingresa el nombre para la Lampara'
  },
  status: {
    type: [{
      type: String,
      enum: ['OFF', 'ON']
    }],
    default: ['OFF']
  }
});

module.exports = mongoose.model('Lamps', LampSchema);
