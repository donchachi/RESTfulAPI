'use strict';
var mongoose = require('mongoose'),
  Lamp = mongoose.model('Lamps');


exports.list_all_lamps = function(req, res) {
  Lamp.find({}, function(err, lamp) {
    if (err)
      res.send(err);
    res.json(lamp);
  });
};


exports.create_a_lamp = function(req, res) {
  var new_lamp = new Lamp(req.body);
  new_lamp.save(function(err, lamp) {
    if (err)
      res.send(err);
    res.json(lamp);
  });
};


exports.read_a_lamp = function(req, res) {
  Lamp.find({ name: req.params.lampName }, function(err, lamp) {
    if (err)
      res.send(err);
    res.json(lamp);
  });
};


exports.update_a_lamp = function(req, res) {
  Lamp.findOneAndUpdate({ name: req.params.lampName}, req.body, {new: true}, function(err, lamp) {
    if (err)
      res.send(err);
    res.json(lamp);
  });
};


exports.delete_a_lamp = function(req, res) {
  Lamp.remove({
    name: req.params.lampName
  }, function(err, lamp) {
    if (err)
      res.send(err);
    res.json({ message: 'Lamp successfully deleted' });
  });
};
