const Controller = require('egg').Controller;
var Mock = require('mockjs');
class ManagController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    const params = ctx.query;
    var data = Mock.mock({
      'manag1|1': [{
        'name|1': [
          "软件部"
        ],
        "number|1": ["105", "200"],
        "location|1": ["二楼201"],
        "functionary|1": ["皮卡丘", ]
      }],

      "manag2|1": [{
        'name|1': [
          "美工部",
        ],
        "number|1": ["100", "20"],
        "location|1": ["二楼202"],
        "functionary|1": ["皮卡丘", ]
      }],

      "manag3|1": [{
        'name|1': [
          "设计部"
        ],
        "number|1": ["58", "721"],
        "location|1": ["二楼203"],
        "functionary|1": ["皮卡丘", ]
      }],

      "manag4|1": [{
        'name|1': [
          "销售部"
        ],
        "number|1": ["90", "200"],
        "location|1": ["二楼204"],
        "functionary|1": ["皮卡丘", ]
      }],
      "manag4|1": [{
        'name|1': [
          "产品部"
        ],
        "number|1": ["111", "200"],
        "location|1": ["二楼205"],
        "functionary|1": ["皮卡丘", ]
      }],
      "manag5|1": [{
        'name|1': [
          "财务部"
        ],
        "number|1": ["125", "100"],
        "location|1": ["二楼206"],
        "functionary|1": ["皮卡丘", ]
      }],
    });
    let x = JSON.stringify(data, null, 4)
    this.ctx.body = x;
  }
}
module.exports = ManagController;
