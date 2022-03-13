const Controller = require('egg').Controller;
var Mock = require('mockjs');
class RoleController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    const params = ctx.query;
    var data = Mock.mock({
      'user1|1': [{
        'name|1': [
          "普通用户"
        ],
        "code|1": ["admin", "pearson", "manager", ],
        "depict|1": ["普通用户"],
        "status|1": ["1", "2"],
      }],
      "user2|1": [{
        'name|1': [
          "普通管理员"
        ],
        "code|1": ["admin", "pearson", "manager", ],
        "depict|1": ["普通管理员"],
        "status|1": ["1", "2"],
      }],
      "user3|1": [{
        'name|1': [
          "超级管理员"
        ],
        "code|1": ["admin", "pearson", "manager", ],
        "depict|1": ["超级管理员"],
        "status|1": ["1", "2"],
      }],
      "user4|1": [{
        'name|1': [
          "普通用户"
        ],
        "code|1": ["admin", "pearson", "manager", ],
        "depict|1": ["普通用户"],
        "status|1": ["1", "2"],
      }],
      "user4|1": [{
        'name|1': [
          "超级管理员"
        ],
        "code|1": ["admin", "pearson", "manager", ],
        "depict|1": ["超级管理员"],
        "status|1": ["1", "2"],
      }],
      "user5|1": [{
        'name|1': [
          "普通用户"
        ],
        "code|1": ["admin", "pearson", "manager", ],
        "depict|1": ["普通用户"],
        "status|1": ["1", "2"],
      }]
    });
    let x = JSON.stringify(data, null, 4)
    this.ctx.body = x;
  }
}
module.exports = RoleController;
