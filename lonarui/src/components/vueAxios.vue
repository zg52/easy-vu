<style>
img {
  width: 30px;
}
</style>
<template>
  <div>
    <ul>
      <li v-for="(list,index) of lists" :key="list.id">
        <span>{{list.id}}</span>
        <i>{{list.name}}</i>
        <em>{{list.des}}</em>
      </li>
      <hr />
      <ul>
        <li v-for="good of goods">
          <span>{{good.t1}}</span>
          <span>
            <img :src="good.t2" />
          </span>
          <span>{{good.t3}}</span>
        </li>
      </ul>
    </ul>
   <label><input type="text" name="name" id="name" placeholder="请输入您的姓名"></label>
                <label><input type="tel" name="mobile" id="mobile" placeholder="请输入您的电话号码"></label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [],
      goods: [],
      URL: {
        url1: "http://www.wujiaweb.com/api"
      },
      getAxios() {
        this.$http
          .getJson(this.URL.url1)
          .then(
            res => {
              let resResult = res.data;
              console.log(resResult);
              let _this = this;
              resResult.favourite_goods.forEach(val => {
                _this.lists.push({
                  id: val.goods_id,
                  name: val.goods_name,
                  des: val.goods_remark
                });
              });
              resResult.hot_goods.forEach(val => {
                // console.log(val);
                _this.goods.push({
                  t1: val.goods_sn,
                  t2: _this.URL.url1.substr(0, 23) + val.original_img,
                  t3: val.goods_name
                });
              });
            },
            error => {
              console.log(error);
            }
          )
          .catch(res => {
            console.log(res);
          });
      }
    };
  },
  methods: {
   
     
  },
  mounted() {
    // axios封装
this.$http.post(
   'http://www.xuefu.com/data/student',
   {
     name:'this is http axios',
   }
  ).then(res => {
    console.log(res);
}).catch((res) => {
  console.log(res);
})
    let _this = this;
    this.$nextTick(() => {
      getUser();
      async function getUser() {
        try {
          const response = await _this.getAxios();
          console.log(response);
        } catch (error) {
          console.error(error);
        }  
      }
    });
    //
    function get1() {
      return _this.$ajax.get("http://www.wujiaweb.com/api/goods/advertise");
    }
    function get2() {
      return _this.$ajax.get("http://www.wujiaweb.com/api/goods/category");
    }
    function get3() {
      return _this.$ajax.get("http://www.wujiaweb.com/api/cart");
    }
    _this.$ajax.all([get1(), get2(), get3()]).then( 
      _this.$ajax.spread(function(data1, data2, data3) {
        let a = data1.data.filter(val => {
          return val.ad_id > 70;
        });
        console.log(a); 
        
      })
    );
  }
};

</script>