const pingConroller = require('../controllers/pingController');

module.exports = function pintRoute(router) {
  router.route('/ping').get(pingConroller.getPong);
};
