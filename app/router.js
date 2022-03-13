'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  // router.get('/', controller.home.index);
  router.redirect('/', '/public/login.html', 302);
  router.get('/user', controller.user.index);
  router.get('/role', controller.role.index);
  router.get('/permission', controller.permission.index);
  router.get('/manag', controller.manag.index);
  router.get('/behavior', controller.behavior.index);
  router.get('/behavior/operation', controller.behavior.operation);
  router.get('/dd', controller.dd.index);
};
