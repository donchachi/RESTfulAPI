'use strict';


module.exports = function(app) {
  var lamp = require('../controllers/lampController');

  // lamp Routes
  app.route('/lamps')
    .get(lamp.list_all_lamps)
    .post(lamp.create_a_lamp);


  app.route('/lamps/:lampName')
    .get(lamp.read_a_lamp)
    .put(lamp.update_a_lamp)
    .delete(lamp.delete_a_lamp);
};
