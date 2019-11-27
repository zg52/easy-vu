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
      "name": "wq",
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
        cartList_price: '1.00',
      },
      {
        cartList_img: require('../assets/image/lxwm-bj.png'),
        cartList_tit: '324343发发',
        cartList_give: 'jifnaewifo',
        cartList_price: '1.00',
      },
      {
        cartList_img: require('../assets/image/lxwm-wh.png'),
        cartList_tit: '基于橘一天京',
        cartList_give: '教育厅金太阳',
        cartList_price: '1.00',
      },
      {
        cartList_img: require('../assets/image/lxwm-cd.png'),
        cartList_tit: 'VB从别发给',
        cartList_give: 'jifn嗯嗯嗯eeeaewifo',
        cartList_price: '1.00',
      }
    ],
    "shoppingPage": [
      {
        shumaLban : 'https://img.alicdn.com/tfs/TB1GqC8XE6FK1Jjy1XdXXblkXXa-223-377.jpg',
        shumaLnav: [
          {
            tit: '尼康相机',
            url: 'https://s.taobao.com/search?spm=a217h.9580640.831238.1.65d325aa7QCvEn&q=%E5%B0%BC%E5%BA%B7&imgfile=&ie=utf8&from_type=3c&app=detailproduct',
          },
          {
            tit: '佳能相机',
            url: 'https://s.taobao.com/search?spm=a217h.9580640.831238.2.65d325aa7QCvEn&q=%E4%BD%B3%E8%83%BD&imgfile=&ie=utf8&from_type=3c&app=detailproduct',
          },
          {
            tit: '索尼相机',
            url: 'https://s.taobao.com/search?spm=a217h.9580640.831238.3.65d325aa7QCvEn&q=%E7%B4%A2%E5%B0%BC%E5%8D%95%E5%8F%8D&imgfile=&ie=utf8&from_type=3c&app=detailproduct',
          },
          {
            tit: '富士相机',
            url: 'https://s.taobao.com/search?spm=a217h.9580640.831238.4.65d325aa7QCvEn&q=%E5%AF%8C%E5%A3%AB%E5%8D%95%E5%8F%8D&imgfile=&ie=utf8&from_type=3c&app=detailproduct'
          },
          {
            tit: '徕卡相机',
            url: 'https://s.taobao.com/search?spm=a217h.9580640.831238.5.65d325aa7QCvEn&q=%E5%BE%95%E5%8D%A1&imgfile=&ie=utf8&from_type=3c&app=detailproduct'
          },
          {
            tit:'宾得相机',
            url:'https://s.taobao.com/search?spm=a217h.9580640.831238.6.65d325aa7QCvEn&q=%E5%AE%BE%E5%BE%97%E5%BE%AE%E5%8D%95&imgfile=&ie=utf8&from_type=3c&app=detailproduct'
          }
        ],
        detailss: [
          {
            href:'http://item.taobao.com/item.htm?spm=a217h.9580640.831238.7.65d325aa7QCvEn&amp;id=567940790056&amp;scm=1007.12144.81309.69999_0_0&amp;pvid=84ed479b-0624-4380-89f1-ea68902266d8&amp;utparam=%7B%22x_hestia_source%22%3A%2269999%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2269999%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%2284ed479b-0624-4380-89f1-ea68902266d8%22%2C%22x_object_id%22%3A567940790056%7D',
            txt:'laowa老蛙F4微单反15mm定焦人像风景1:1微距超大广角建筑移轴镜头',
            map:'//gw.alicdn.com/bao/uploaded/i4/1079397518/TB2dXFnmNWYBuNjy1zkXXXGGpXa_!!1079397518.jpg',
            price: '2498'
          },
          {
          href:'http://item.taobao.com/item.htm?spm=a217h.9580640.831238.8.65d325aa7QCvEn&amp;id=540271993318&amp;scm=1007.12144.81309.69999_0_0&amp;pvid=84ed479b-0624-4380-89f1-ea68902266d8&amp;utparam=%7B%22x_hestia_source%22%3A%2269999%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2269999%22%2C%22x_pos%22%3A2%2C%22x_pvid%22%3A%2284ed479b-0624-4380-89f1-ea68902266d8%22%2C%22x_object_id%22%3A540271993318%7D',
          txt:'璐朗德 Luland 产超大画幅 CQ-100球型云台 球形云台',
          map:'//gw.alicdn.com/bao/uploaded/i4/2733237495/TB2Lm3dXHeI.eBjSspkXXaXqVXa_!!2733237495.jpg',
          price:'1998'
          },
          {
            href:'http://item.taobao.com/item.htm?spm=a217h.9580640.831238.9.65d325aa7QCvEn&amp;id=13489982902&amp;scm=1007.12144.81309.69999_0_0&amp;pvid=84ed479b-0624-4380-89f1-ea68902266d8&amp;utparam=%7B%22x_hestia_source%22%3A%2269999%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2269999%22%2C%22x_pos%22%3A3%2C%22x_pvid%22%3A%2284ed479b-0624-4380-89f1-ea68902266d8%22%2C%22x_object_id%22%3A13489982902%7D',
            txt:'【尼康专卖店】Nikon/尼康 J1双镜头套机(含10-30和30-110镜头)',
            map:'//gw.alicdn.com/bao/uploaded/i1/T1ayawXf4bXXbuTuDX_084728.jpg',
            price:'5888'
          },
          {
            href:'http://item.taobao.com/item.htm?spm=a217h.9580640.831238.10.65d325aa7QCvEn&amp;id=525775129677&amp;scm=1007.12144.81309.69999_0_0&amp;pvid=84ed479b-0624-4380-89f1-ea68902266d8&amp;utparam=%7B%22x_hestia_source%22%3A%2269999%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2269999%22%2C%22x_pos%22%3A4%2C%22x_pvid%22%3A%2284ed479b-0624-4380-89f1-ea68902266d8%22%2C%22x_object_id%22%3A525775129677%7D',
            txt:'2015新款 Ricoh/理光 WG-40 四防数码相机 潜水防水相机 高清摄影',
            map:'//gw.alicdn.com/bao/uploaded/i1/TB1AKjcLXXXXXaMaXXXXXXXXXXX_!!0-item_pic.jpg',
            price:'2000'
          },
          {
            href:'http://item.taobao.com/item.htm?spm=a217h.9580640.831238.11.65d325aa7QCvEn&amp;id=560078252848&amp;scm=1007.12144.81309.69999_0_0&amp;pvid=84ed479b-0624-4380-89f1-ea68902266d8&amp;utparam=%7B%22x_hestia_source%22%3A%2269999%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2269999%22%2C%22x_pos%22%3A5%2C%22x_pvid%22%3A%2284ed479b-0624-4380-89f1-ea68902266d8%22%2C%22x_object_id%22%3A560078252848%7D',
            txt:'Canon/佳能 EOS M100 套机 EF-M 15-45mm IS STM 微单反数码相机',
            map:'//gw.alicdn.com/bao/uploaded/i1/198675716/TB29Wb_iLBNTKJjSszcXXbO2VXa_!!198675716.jpg',
            price:'2480'
          },
          {
            href:'http://item.taobao.com/item.htm?spm=a217h.9580640.831238.12.65d325aa7QCvEn&amp;id=39080188338&amp;scm=1007.12144.81309.69999_0_0&amp;pvid=84ed479b-0624-4380-89f1-ea68902266d8&amp;utparam=%7B%22x_hestia_source%22%3A%2269999%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2269999%22%2C%22x_pos%22%3A6%2C%22x_pvid%22%3A%2284ed479b-0624-4380-89f1-ea68902266d8%22%2C%22x_object_id%22%3A39080188338%7D',
            txt:'Tokina/图丽 16.5-135mm F/3.5-5.6 单反相机镜头 日本原装全新',
            map:'//gw.alicdn.com/bao/uploaded/i4/T1gd3hFRhcXXXXXXXX_!!0-item_pic.jpg',
            price:'2200'
          },
          {
            href:'http://item.taobao.com/item.htm?spm=a217h.9580640.831238.13.65d325aa7QCvEn&amp;id=40473029015&amp;scm=1007.12144.81309.69999_0_0&amp;pvid=84ed479b-0624-4380-89f1-ea68902266d8&amp;utparam=%7B%22x_hestia_source%22%3A%2269999%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2269999%22%2C%22x_pos%22%3A7%2C%22x_pvid%22%3A%2284ed479b-0624-4380-89f1-ea68902266d8%22%2C%22x_object_id%22%3A40473029015%7D',
            txt:'包邮2014新款Pentax/宾得 PENTAX XG-1 长焦数码相机52倍光学变焦',
            map:'//gw.alicdn.com/bao/uploaded/i3/TB17BrIFVXXXXcoXFXXXXXXXXXX_!!0-item_pic.jpg',
            price:'1750'
          },
          {
            href:'http://item.taobao.com/item.htm?spm=a217h.9580640.831238.14.65d325aa7QCvEn&amp;id=544652172531&amp;scm=1007.12144.81309.69999_0_0&amp;pvid=84ed479b-0624-4380-89f1-ea68902266d8&amp;utparam=%7B%22x_hestia_source%22%3A%2269999%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A8%2C%22x_src%22%3A%2269999%22%2C%22x_pos%22%3A8%2C%22x_pvid%22%3A%2284ed479b-0624-4380-89f1-ea68902266d8%22%2C%22x_object_id%22%3A544652172531%7D',
            txt:'Canon/佳能 Extender EF 1.4x III 佳能1.4X增倍镜 正品国行 分期',
            map:'//gw.alicdn.com/bao/uploaded/i3/TB1SA8IPpXXXXcrapXXXXXXXXXX_!!0-item_pic.jpg',
            price:'2530'
          }
        ],
        shumaLban1: 'https://img.alicdn.com/tfs/TB1ZVApXwvGK1Jjy0FcXXXXmVXa-223-341.jpg',
        url2      : '',
        shumaRban:'https://img.alicdn.com/tfs/TB1d.AnXwvGK1Jjy0FfXXbykpXa-223-158.jpg',
        url33     : ''
      }
    ]
  }
})


