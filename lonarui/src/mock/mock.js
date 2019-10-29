// 使用 Mock
var Mock = require('mockjs')
var datas = Mock.mock('http://www.zg.com', {
  "msg": "登录成功",
  "success": true,
  "statusCode": 200,
  "error": 500,
  "number|+1": 202,
  "vip|1-8": "★",
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
  // 分页
  "pages": [
    {
      "id": '1',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "北京市海淀区"
    },
    {
      "id": '2',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "北京市海淀区"
    }, {
      "id": '3',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "北京市海淀区"
    }, {
      "id": '4',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "北京市海淀区"
    }, {
      "id": '5',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "北京市海淀区"
    }, {
      "id": '6',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "北京市海淀区"
    }, {
      "id": '7',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "北京市海淀区"
    }, {
      "id": '8',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "北京市海淀区"
    }, {
      "id": '9',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "北京市海淀区"
    }, {
      "id": '10',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "北京市海淀区"
    }, {
      "id": '11',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '12',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '13',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '14',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '15',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '16',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '17',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '18',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '19',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '20',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '21',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '22',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '23',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '24',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '25',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '26',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '27',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '28',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '29',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '30',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '31',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '32',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '33',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '34',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '35',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '36',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '37',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '38',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '39',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '40',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '41',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '42',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '43',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '44',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '45',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '46',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '47',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '48',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '49',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    },
    {
      "id": '50',
      "name": "qq",
      "mobile": "15652970369",
      "idCard": "62283867678887653x",
      "address": "waef"
    }
  ],
  //商品相关
  "shoppingLists": {
    "cartList_cart": [
      {
        cartList_img: require('../assets/image/lxwm-nj.png'),
        cartList_tit: '分万分飞飞飞',
        cartList_give: 'jifnaewifo',
        cartList_price: '122.00',
        cartList_totalPrice: ''
      },
      {
        cartList_img: require('../assets/image/lxwm-bj.png'),
        cartList_tit: '324343发发',
        cartList_give: 'jifnaewifo',
        cartList_price: '220.00',
        cartList_totalPrice: ''
      },
      {
        cartList_img: require('../assets/image/lxwm-wh.png'),
        cartList_tit: '基于橘一天京',
        cartList_give: '教育厅金太阳',
        cartList_price: '22.00',
        cartList_totalPrice: ''
      },
      {
        cartList_img: require('../assets/image/lxwm-cd.png'),
        cartList_tit: 'VB从别发给',
        cartList_give: 'jifn嗯嗯嗯eeeaewifo',
        cartList_price: '1220.00',
        cartList_totalPrice: ''
      }
    ],
    "shopping_lists": [

    ]
  }
})


