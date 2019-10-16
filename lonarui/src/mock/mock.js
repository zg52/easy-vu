// 使用 Mock
var Mock = require('mockjs')
var datas = Mock.mock('http://www.zg.com', {
   "login": [
      {
         "id": 1,
         "name": "月弦笙音",
         "password": "4321",
         "mobile": '15652970369'
      },
      {
         "id": 2,
         "name": "倩倩",
         "password": "4321",
         "mobile": '15652897653'
      },
      {
         "id": 3,
         "name": "纳尼",
         "password": "4321",
         "mobile": '15456764578'
      },
      {
         "id": 4,
         "name": "好的呢",
         "password": "4321",
         "mobile": '18987676545'
      }
   ],

   
   "msg": "登录成功",
   "success": true,
   "statusCode": 200,
   "error": 500,
   "number|+1": 202,
   "vip|1-8": "★"
})
// 输出结果

