/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1634609729874_6962';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cors = {
    origin: "*", // 跨任何域
    credentisls: true, // 允许跨域请求携带cookies
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS", // 被允许的请求方式
  }

  return {
    ...config,
    ...userConfig,
  };
};
