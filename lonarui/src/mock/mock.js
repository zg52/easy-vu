// 使用 Mock
var Mock = require('mockjs')
var datas = Mock.mock('http://www.zg.com',{
  "login": [
     {
        "name": "longarui",
        "password": "4321"
     }
  ],
  "msg": "登录成功",
  "success": true,
  "statusCode": 200,
  "number|+1": 202,
  "vip|1-8": "★"
})
// 输出结果
 
 