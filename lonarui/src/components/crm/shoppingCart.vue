<style scoped lang="less">
@import "../.././assets/css/public.less";
.shoppingCart {
  .mt(40);
}
.shoppingCart h2 {
  .fz(20);
}
.shoppingCart > h2 span {
  width: 40%;
  height: 1px;
  background: #333;
  .d-in-block;
  vertical-align: middle;
  font-weight: bold;
}
.shoppingCart .tit {
  background: skyblue;
  color: #fff;
  height: 40px;
  .mt(40);
  .flex;
  span {
    display: inline-block;
    .fz(16);
    text-align: center;
    line-height: 40px;
  }
  span {
    flex: 1/5;
  }
  span:first-child {
    flex: 3/5;
  }
}

.shoppingCart li {
  .trans4;
  &:hover {
    background: rgb(251, 251, 251);
  }
  .flex;
  div > i {
    border: 1px #ccc solid;
    .w-h(20, 20);
    display: inline-block;
    border-radius: 50%;
    .t-center;
    .fz(20);
    cursor: pointer;
  }
  div > .el-icon-check {
    background: rgb(251, 96, 6);
    border-color: transparent;
    color: #fff;
  }
  div {
    padding: 25px 0;
    border-bottom: 1px #eee solid;
    .flex;
    flex: 1/5;
    .t-center;
    align-items: center;
    .flex-center;
    dl {
      .ml(30);
      h4 {
        .w(120);
        .fz(14);
        .pt(5);
        .t-left;
      }
      p {
        .fz(14);
      }
      p {
        .t-left;
        .pt(80);
        span {
          .fz(12);
          color: #969696;
        }
      }
    }
    dt a,
    dd {
      .d-in-block;
      .w-h(120, 120);
      overflow: hidden;
    }
    dd {
      .ml(10);
    }
    dt,
    dd {
      .d-in-block;
    }
    button {
      border: none;
      outline: none;
      color: #333;
      .fz(16);
      background: transparent;
      .pl(5);
      .pr(5);
      cursor: pointer;
      border: 1px #eee solid;

      &:hover {
        border-color: rgb(240, 192, 164);
      }
      &:active {
        transform: scale(1.05, 1.05);
        color: rgb(248, 97, 9);
      }
    }
    input {
      .fz(14);
      border: none;
      .w(30);
      background: transparent;
      .ml(16);
    }
  }
  div:first-child {
    flex: 3/5;
  }
  div:nth-child(4) {
    color: rgb(255, 96, 4);
  }
  div:last-child {
    .fz(18);
    cursor: pointer;
    em {
      .trans4;
    }
    em:hover {
      color: rgb(255, 96, 4);
    }
  }
}
.settlement {
  .mt(30);
  .flex;
  .flex-between;
  p {
    em {
     i {
       color: rgb(251, 96, 6);
     }
    }
  }
}
.allOption {
  .fz(16);
  i {
    vertical-align: text-top;
    border: 1px #ccc solid;
    .w-h(20, 20);
    display: inline-block;
    border-radius: 50%;
    .t-center;
    .fz(20);
    .mr(5);
  }
  cursor: pointer;
  .el-icon-check {
    background: rgb(251, 96, 6);
    border-color: transparent;
    color: #fff;
  }
}
.check-out {
  width: 100px;
  height: 40px;
  background: rgb(251, 96, 6);
  .fz(14);
  color: #fff;
  line-height: 40px;
  .t-center;
  .d-in-block;
  cursor: pointer;
  .trans4;
}
.check-out:active {
  outline-color: red;
}
</style>
<template>
  <div class="shoppingCart">
    <h2 class="t-center">
      <span></span>
      {{ 'shopping' | shopping }}
      <span></span>
    </h2>
    <div class="mt1100 list">
      <div class="tit">
        <span>商品信息</span>
        <span>商品金额</span>
        <span>商品数量</span>
        <span>总金额</span>
        <span>编辑</span>
      </div>
      <ul id="option">
        <li v-for="(cartList,index) of cartLists" :key="cartList.id">
          <div>
            <i :class="{'el-icon-check': isActiveArr.includes(index)}" @click="checkedBox(index)"></i>
            <dl>
              <dt>
                <a>
                  <img :src="cartList.cartList_img" />
                </a>
              </dt>
              <dd>
                <h4>{{ cartList.cartList_tit }}</h4>
                <p>
                  赠送：
                  <span>{{ cartList.cartList_give }}</span>
                </p>
              </dd>
            </dl>
          </div>
          <div>￥ {{ cartList.cartList_price }}</div>
          <div>
            <button @click="decrease_num(index)">-</button>
            <input type="text" readonly="readonly" v-model="cartList.priceNum" />
            <button @click="increase_num(index)">+</button>
          </div>
          <div>￥ {{ cartList.cartList_totalPrice }} 元</div>
          <div @click.prevent="cartLists.splice(index,1)">
            <em class="el-icon-delete"></em>
          </div>
        </li>
      </ul>
      <div class="settlement">
        <span class="allOption" @click="allOptionHandler">
          <i :class="{'el-icon-check':allOption}"></i>
          {{ allTheSelected }}
        </span>
       <p>
          <em>合计：<i>￥{{ totalMoney }}</i>&nbsp;&nbsp;&nbsp;</em>
          <span class="check-out">结算 ({{ quantity }})</span>
       </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isActiveArr    : [],//绑定的class
         priceNum    : 1,//默认商品数量1
       requestUrl    : this.$store.state.third.requestUrl,
        cartLists    : [],//购物车列表
        allOption    : false, //单选/全选状态
      cartLists_index: 0,
      allTheSelected : "全选",
      quantity       : 0,//结算的商品数量
      totalMoney     : 0,//结算总金额
      switchVar      :true,//开关变量
      cartIndex() {
        //购物车列表索引
        return this.cartLists.map((res, index) => {
          return index;
        });
      },
      cartLists_conts(x) {
        //删除购物车列表内容
        return x.map((val, index) => {
          return {
            originalPrice: val.cartList_price,
            addPrices: val.cartList_totalPrice
          };
        });
      }
    };
  },
  filters: {
    shopping(txt, s) {
      return txt + " cart";
    }
    },
    beforeMount() {},
    mounted() {
      this.$nextTick(function() {
        this.getCartLists();
      });
    },
    methods: {
  //  增加上商品数量
      increase_num(i) {
        let cart_el1 = this.cartLists[i]; 
           if(cart_el1.priceNum === 1) {
          this.quantity = cart_el1.priceNum;//点击按钮将商品数量首先赋值给结算总数
          this.totalMoney = parseInt(this.totalMoney) + parseInt(cart_el1.cartList_price); 
          // this.switchVar = false;
          // Array.from({length:this.cartLists.length -1}).map((val,index) => {
          //  i === index ? this.totalMoney = parseInt(this.totalMoney) + parseInt(cart_el1.cartList_price) : String;
          // })
          }
        cart_el1.priceNum = cart_el1.priceNum + 1;//点击按钮每次加1
        this.quantity = this.quantity + 1;
       // 点击增加按钮时，设置选中商品，将该商品累计金额增加到合计金额总值；
        !this.isActiveArr.includes(i) ? (
         this.isActiveArr.push(i)
      ) : null;

        cart_el1.cartList_totalPrice = parseInt(cart_el1.cartList_totalPrice) + parseInt(cart_el1.cartList_price);//点击累计加单价金额
        this.totalMoney = parseInt(this.totalMoney) + parseInt(cart_el1.cartList_price) //每次点击计算合计金额

        // if (this.switchVar) {
        //    cart_el1.priceNum === 2 ?  
        // this.totalMoney = parseInt(this.totalMoney) + parseInt(cart_el1.cartList_price) : 
        // null;//点击按钮时首先将商品单价赋值给合计金额
        // this.switchVar = false;
        // } else {
        //   this.switchVar = true;
        // }

 

    },
// 递减商品数量
    decrease_num(i) {
      let _this = this;
      let cart_el2 = _this.cartLists[i];//购物车列表每项
      let decrease_priceNum = cart_el2.priceNum;
      decrease_priceNum <= 1 ? String : decrease();
      function decrease() {
       cart_el2.priceNum = decrease_priceNum - 1;//点击按钮每次减1
       _this.quantity = _this.quantity - 1,
        cart_el2.cartList_totalPrice = parseInt(cart_el2.cartList_totalPrice) - parseInt(cart_el2.cartList_price);//点击累计减单价金额
        _this.totalMoney = parseInt(_this.totalMoney) - parseInt(cart_el2.cartList_price) //每次点击计算合计金额
        
        // if (_this.switchVar) {
        //    cart_el2.priceNum === 2 ?  
        // _this.totalMoney = parseInt(_this.totalMoney) - parseInt(cart_el2.cartList_price) : 
        // null;//点击按钮时首先将商品单价赋值给合计金额
        // _this.switchVar = false;
        // } else {
        //   _this.switchVar = true;
        // }
      }
    },
// 单选/多选
    checkedBox(index) {
      //利用includes查找一个元素是否存在于一个元素中返回的布尔值添加或移除选中状态
      this.isActiveArr.includes(index)
        ? (
           this.isActiveArr = this.isActiveArr.filter(res => res != index),
            this.quantity = this.quantity - 1,//结算商品个数
          this.totalMoney = parseInt(this.totalMoney) - parseInt(this.cartLists[index].cartList_totalPrice)   // 合计金额
          )
        : (
          this.isActiveArr.push(index),
          this.quantity = this.quantity + 1,//结算商品个数
          this.totalMoney = parseInt(this.totalMoney) + parseInt(this.cartLists[index].cartList_totalPrice)  // 合计金额
          );

        this.isActiveArr.sort().length == this.cartIndex().sort().length
        ? (
          this.allTheSelected = "全选",
           this.allOption = true
           )
        : (
          this.allOption = false
          );
// 判断是否选中商品，计算总金额
    },

// 商品全选
    allOptionHandler() {
      let _this = this;
      let get_total = 0;
      this.allOption === false && this.isActiveArr != this.cartIndex()
        ? (
          this.allOption = true,
          this.isActiveArr = this.cartIndex(),
          this.allTheSelected = "取消全选",
          this.cartLists.map((val,index) => {
              get_total += parseInt(val.cartList_totalPrice)
           }),
            this.totalMoney = get_total,
          this.quantity = this.cartLists.length
          )
        : (
          this.allOption = false,
          this.isActiveArr = new Array(),
          this.allTheSelected = "全选",
            this.totalMoney = 0,
          this.quantity = 0
         
          );
          console.log(get_total);
         
    },
// 拉取购物车列表
    getCartLists() {
      this.$http
        .getJson(this.requestUrl)
        .then(res => {
          res.shoppingLists.cartList_cart.map((val, index) => {
            this.cartLists.push({
              cartList_img: val.cartList_img,
              cartList_tit: val.cartList_tit,
              cartList_give: val.cartList_give,
              priceNum: 1,
              cartList_price: val.cartList_price,
              cartList_totalPrice: val.cartList_price
            });
          });
        }).catch(error => {
          console.log(error);
        })
    }
  }
};
</script> 