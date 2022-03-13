const Controller = require('egg').Controller;
var Mock = require('mockjs');
class BehaviorController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    const params = ctx.query;
    var data = Mock.mock({
      'user1|1': [{
        'module|1': [
          "主页"
        ],
        "request|1": ["GET"],
        "port|1": ["/login"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 10:57:50"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
      "user2|1": [{
        'module|1': [
          "主页"
        ],
        "request|1": ["GET"],
        "port|1": ["/login"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 10:59:23"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
      "user3|1": [{
        'module|1': [
          "主页"
        ],
        "request|1": ["GET"],
        "port|1": ["/login"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 10:59:29"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
      "user4|1": [{
        'module|1': [
          "主页"
        ],
        "request|1": ["GET"],
        "port|1": ["/login"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 10:59:34"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
      "user4|1": [{
        'module|1': [
          "主页"
        ],
        "request|1": ["GET"],
        "port|1": ["/login"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 11:00:44"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
      "user5|1": [{
        'module|1': [
          "主页"
        ],
        "request|1": ["GET"],
        "port|1": ["/login"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 11:00:38"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
    });
    let x = JSON.stringify(data, null, 4)
    this.ctx.body = x;
  }

  async operation() {
    const {
      ctx
    } = this;
    const params = ctx.query;
    var data = Mock.mock({
      'user1|1': [{
        'module|1': [
          "主页"
        ],
        "request|1": ["POST"],
        "port|1": ["/index"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 10:57:50"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
      "user2|1": [{
        'module|1': [
          "主页"
        ],
        "request|1": ["POST"],
        "port|1": ["/index"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 10:59:23"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
      "user3|1": [{
        'module|1': [
          "主页"
        ],
        "request|1": ["POST"],
        "port|1": ["/index"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 10:59:29"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
      "user4|1": [{
        'module|1': [
          "主页"
        ],
        "request|1": ["POST"],
        "port|1": ["/index"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 10:59:34"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
      "user4|1": [{
        'module|1': [
          "主页"
        ],
        "request|1": ["POST"],
        "port|1": ["/index"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 11:00:44"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
      "user5|1": [{
        'module|1': [
          "主页"
        ],
        "request|1": ["POST"],
        "port|1": ["/index"],
        "browser|1": ["谷歌浏览器"],
        "location|1": ["127.0.0.1"],
        "time|1": ["2021-10-31 11:00:38"],
        "system|1": ["windows"],
        "operator|1": ["admin"]
      }],
    });
    let x = JSON.stringify(data, null, 4)
    this.ctx.body = x;
  }
}
module.exports = BehaviorController;
