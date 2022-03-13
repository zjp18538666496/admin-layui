const Controller = require('egg').Controller;
var Mock = require('mockjs');
class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    var data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
      }],
      "object|2-4": {
        "110000": "北京市",
        "120000": "天津市",
        "130000": "河北省",
        "140000": "山西省"
      }
    });
    // 输出结果
    let x = JSON.stringify(data, null, 4);
    ctx.body = x;
  }
}
module.exports = HomeController;
