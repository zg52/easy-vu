<style scoped lang="less">
@import ".././assets/css/public.less";
li {
  list-style: none;
}
h2 {
  .fz(20);
}
h2 span {
  width: 40%;
  height: 1px;
  background: #333;
  .d-in-block;
  vertical-align: middle;
  font-weight: bold;
}
.shoppingList {
  .pt(40);
}
.listsShow {
  .w(1192);
  margin: 0 auto;
  div li {
    width: 185px;
    height: 249px;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
}
.tName {
  float: left;
  padding-left: 11px;
  border-left: 11px solid #76baec;
  color: #76baec;
  .fz(20);
  .mb(20);
  .mt(20);
}
.shuma-list {
  .w(1192);
}
.shuma-list > div:first-child,
.shuma-list > div:last-child {
  .w(223);
  border: 1px solid #e5e5e5;
}
.shuma-list > div:first-child {
  border-right: none;
  background: #e7e7e7;
}
.shuma-list > div:last-child {
  border-left: none;
}
.protwo-title {
  width: 135px;
  padding: 3px 0 10px;
  margin: 0 auto;
  font-size: 12px;
  color: #9c9c9c;
  line-height: 12px;
}
a + div {
  .w(223);
  a {
    .ml(37);
  }margin-top: 20px;
}
.shumaL-list a {
  display: inline-block;
  font-size: 14px;
  color: #7a7a7a;
  line-height: 30px;
  overflow: hidden;
}
li p {
  .ml(25) !important;
}
</style>
<template>
  <div class="shoppingList">
    <h2 class="t-center">
      <span></span>
      商品列表
      <span></span>
    </h2>
    <div class="listsShow">
      <p class="tName">1F 数码商品</p>
      <div class="shuma-list flexbetween"
          v-for="(shuma,index) of shumaList">
        <div>
          <a>
            <img :src="shuma.shumaLban" width="223" height="377"/>
          </a>
          <div class="shumaL-list">
           <a v-for="(shumaLnav,index) of shuma.shumaLnavs" :href="shumaLnav.url">{{ shumaLnav.tit }}</a>
          </div>                     
        </div>
        <div class="flex flex-wrap">
          <li v-for="(details,index) of shuma.detailss">
            <a :href="details.href" target="blank" :title="details.txt">
              <img width="185" height="196" :src="details.map" />
              <p class="protwo-title ellipsis1">{{ details.txt }}</p>
              <p class="parttwo-price">
                <em>¥</em>{{ details.price }}
              </p>
            </a>
          </li>
        </div>
        <div>   
          <a :href="shuma.url2" target="blank">                               
            <img :src="shuma.shumaLban1" width="223" height="341"/>
          </a>
          <a :href="shuma.url3" target="blank">
            <img :src="shuma.shumaRban" width="223" height="158"/>
          </a>
        </div>
      </div>
    </div>

    <!-- 将商品值传给参数页 -->
    <getParams
        lists="www"
    ></getParams>
  </div>
</template> 
<script>
import getParams from './getParams.vue'
export default {
  components: {
    getParams
  },
  data() {
    return {
      ids:[1,2,3,4,54,5],
      requestUrl: this.$store.state.third.requestUrl,
      shumaList: []
    }},
    mounted () {
           this.$http.post(this.requestUrl).then(res => {
             let shumaLban2Data = res.shoppingLists.shoppingPage[0];
               this.shumaList.push(
                 {
                    shumaLban : shumaLban2Data.shumaLban,
                    shumaLnavs: shumaLban2Data.shumaLnav,
                    detailss: shumaLban2Data.detailss,
                    shumaLban1: shumaLban2Data.shumaLban1,
                    url2      : '22',
                    shumaRban:shumaLban2Data.shumaRban,
                    url3      : '2', 
                  }
               )
        }).catch(error => {
          console.log(error);
        })
    }
} 
</script> 