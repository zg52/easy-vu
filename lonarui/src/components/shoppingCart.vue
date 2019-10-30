<style scoped lang="less">
@import ".././assets/css/public.less";
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
      .trans4;
      &:hover {
        border-color: rgb(240, 192, 164);
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
   }
    cursor: pointer;
    .el-icon-check {
    background: rgb(251, 96, 6);
    border-color: transparent;
    color: #fff;
}
  }
  
</style>
<template>
  <div class="shoppingCart">
    <h2 class="t-center">
      <span></span> {{ 'shopping' | shopping }} <span></span>
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
        <li 
          v-for="(cartList,index) of cartLists"
          :key="cartList.id">
          <div>
            <i :class="{'el-icon-check': isActiveArr.includes(index)}" @click="checkedBox(index)"></i>
            <dl>
              <dt>
                <a>
                  <img :src="cartList.cartList_img"/>
                </a>
              </dt>
              <dd>
                <h4>{{ cartList.cartList_tit }}</h4>
                <p>赠送：<span>{{ cartList.cartList_give }}</span>
                </p>
              </dd>
            </dl>
          </div>
          <div>￥ {{ cartList.cartList_price }}</div>
          <div>
            <button>-</button>
            <input type="text" readonly="readonly" v-model="priceNum"/>
            <button>+</button>
          </div>
          <div>￥ {{ cartList.cartList_totalPrice }} 元</div>
          <div @click.prevent="cartLists.splice(index,1)">
            <em class="el-icon-delete"></em>
          </div>
        </li>
      </ul>
      <div class="settlement">
       <span class="allOption" @click="allOptionHandler"> <i :class="{'el-icon-check':allOption}"></i> {{ '全选' }} </span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';
export default {
  data() {
    return {
      isActiveArr: [],
      priceNum:1,
      requestUrl:this.$store.state.third.requestUrl,
      cartLists: [],
      allOption: false,
      cartLists_index:0
       
    }
  },
    filters: {
    shopping (txt,s) {
      return  txt + ' cart'
    }
  },
  beforeMount() {
  },
  mounted() {
   this.$nextTick(function () {
      this.getCartLists();
   })
  },
  methods: {
// 单选/多选
    checkedBox (index){  //利用includes查找一个元素是否存在于一个元素中返回的布尔值添加或移除选中状态 
      this.isActiveArr.includes(index) ?
      this.isActiveArr = this.isActiveArr.filter(res => res != index) :
      this.isActiveArr.push(index)
    },
// 全选
    allOptionHandler () {
      let _this = this;
       var optionAllIndex = _this.cartLists.map((res,index) => {
         return index
       });
       
      this.allOption === false ?
      (this.allOption = true,this.isActiveArr = optionAllIndex) :
      (this.allOption = false)
    },
      getCartLists () {
      // 拉去购物车列表
      this.$http.getJson(this.requestUrl).then(res => {
        res.shoppingLists.cartList_cart.map((val,index) => {
         this.cartLists.push(
           {
              cartList_img: val.cartList_img,
              cartList_tit: val.cartList_tit,
              cartList_give: val.cartList_give,
              cartList_price: val.cartList_price,
              cartList_totalPrice: val.cartList_totalPrice
           });
        });
      }).catch(error => {
        console.log(error);
      })
    }
  }
}
</script> 