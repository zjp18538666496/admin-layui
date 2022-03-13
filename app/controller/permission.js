const Controller = require('egg').Controller;
var Mock = require('mockjs');
class PermissionController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    const params = ctx.query;
    var data = Mock.mock({
      'permission1|1': [{
        'name|1': [
          "系统管理",
        ],
        "icon|1": ["&#xe614"],
        "type|1": ["目录"],
        "switch|1": ["2", "1"],
        "sort|1": ["1"],
      }],
      "permission2|1": [{
        'name|1': [
          "敏捷开发"
        ],
        "icon|1": ["&#xe674"],
        "type|1": ["目录"],
        "switch|1": ["2", "1"],
        "sort|1": ["2"],
      }],
      "permission3|1": [{
        'name|1': [
          "定时任务"
        ],
        "icon|1": ["&#xe60e"],
        "type|1": ["目录"],
        "switch|1": ["2", "1"],
        "sort|1": ["5"],
      }],
      "permission4|1": [{
        'name|1': [
          "工作流程"
        ],
        "icon|1": ["&#xe631"],
        "type|1": ["目录"],
        "switch|1": ["2", "1"],
        "sort|1": ["3"],
      }],
      "permission5|1": [{
        'name|1': [
          "系统监控"
        ],
        "icon|1": ["&#xe665"],
        "type|1": ["目录"],
        "switch|1": ["2", "1"],
        "sort|1": ["4"],
      }]
    });
    let x = JSON.stringify(data, null, 4)
    this.ctx.body = x;
  }
}
module.exports = PermissionController;
