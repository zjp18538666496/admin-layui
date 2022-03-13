const Controller = require('egg').Controller;
var Mock = require('mockjs');
class DdController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    const params = ctx.query;
    var data = Mock.mock({
      'dd1|1': [{
        'name|1': [
          "用户状态"
        ],
        "describe|1": ["用户状态"],
        "status|1": ["1", "2"],
      }],
      "dd2|1": [{
        'name|1': [
          "登录类型",
        ],
        "describe|1": ["登录类型"],
        "status|1": ["1", "2"],
      }],
      "dd3|1": [{
        'name|1': [
          "用户类型"
        ],
        "describe|1": ["用户类型"],
        "status|1": ["1", "2"],
      }],
      "dd4|1": [{
        'name|1': [
          "配置类型"
        ],
        "describe|1": ["配置类型"],
        "status|1": ["1", "2"],
      }],
      "dd4|1": [{
        'name|1': [
          "用户性别"
        ],
        "describe|1": ["用户性别"],
        "status|1": ["1", "2"],
      }],
      "dd5|1": [{
        'name|1': [
          "全局状态"
        ],
        "describe|1": ["状态描述"],
        "status|1": ["1", "2"],
      }],
    });
    let x = JSON.stringify(data, null, 4)
    this.ctx.body = x;
  }
}
module.exports = DdController;
