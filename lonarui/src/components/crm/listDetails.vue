<style scoped lang="less">
@import "../.././assets/css/public.less";
.codeTit {
  color: #263162;
  font-size: 20px;
  font-weight: bold;
}
h2 {
  text-align: left;
}
.listDetails {
  .t-center;
}
.listDetails li {
  line-height: 30px;
  font-size: 14px;
  border-bottom: 1px rgb(44, 173, 224) solid;
  transition: all 0.4s;
  text-align: left;
}
.listDetails li span:hover {
  color: red;
}
.listDetails li:hover {
  border-color: rgb(44, 173, 224);
  cursor: pointer;
}
.listDetails li span {
  .pt(6);
  .pb(6);
  padding-right: 30px;
  .pl(10);
}

.listDetails li {
  span:last-child {
    border-right: none;
  }
}
.listDetails ul {
  .mt(20);
  position: relative;
}
.paginations {
  .mt(30);
}
.listDetails ul i {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  height: 100%;
  background: transparent;
  transition: all 0.4s;
  display: block;
}
.listDetails ul i.active {
  background-color: hsla(0, 0%, 100%, 0.9);
}
.listDetails ul em {
  .w-h(36, 36);
  display: block;
  position: absolute;
  border-radius: 50%;
  background-color: skyblue;
  -webkit-animation: ani-spin-bounce 1s 0s ease-in-out infinite;
  animation: ani-spin-bounce 1s 0s ease-in-out infinite;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  opacity: 0;
}
.listDetails ul em.active {
  opacity: 1;
}
@keyframes ani-spin-bounce {
  0% {
    transform: scale(0);
  }
  to {
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>

<!--单独更爱ele-ui组件样式-->
<style lang="less">
.el-pager li.active {
  background: skyblue !important;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  color: #333;
}
</style>
<template>
  <div class="listDetails mt30"> <router-link to="/">to index</router-link>
    <div class="mt1100">
      <h2 class="codeTit">地址详情页</h2>
      <div>
        <ul>
          <li v-for="(site,index) of sites" :key="site.id">
            <span>编号：{{site.id}}</span>
            <span>姓名：{{ site.name }}</span>
            <span>手机号：{{ site.mobile }}</span>
            <span>证件号码：{{ site.idCard }}</span>
            <span>住址：{{ site.address }}</span>
          </li>
          <i :class="{active:isActive}"></i>
          <em :class="{active:isActive}"></em>
        </ul>
        <el-pagination
          @size-change="handleSizeChange"
          class="paginations"
          @current-change="handleCurrentChange"
          :background="bg"
          :page-size="page_size"
          :total="page_num"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listDetails",
  data() {
    return {
      bg: true, //分页背景色值
      sites: [], //列表
      page_num: 50, //页条50
      page_size: 10, //每页展示10条数据
      pageSliceNum: [], //开始截取数据位置
      page_index: Number, //页码数
      isActive: false, //加载中提示

      addNumHalder() {
        var page_index = this.page_num / this.page_size;
        this.page_index = page_index;
        var pagesShow = [];
        Array.from({ length: this.page_index }).map((item, i) => {
          pagesShow.push(parseInt(i + 1 + "0"));
        });
        this.pageSliceNum = [0].concat(pagesShow);
      }
    }
  },
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      this.$http.get("http://www.zg.com").then(res => {
        this.sites = [];
        res.pages.forEach(val => {
          this.sites.push({
            id: val.id,
            name: val.name,
            mobile: val.mobile,
            idCard: val.idCard,
            address: val.address
          });
        });
        this.isActive = true;
        // 页码
        setTimeout(() => {
          res.statusCode === 200 && res.success === true
            ? (this.isActive = false)
            : (this.isActive = true);
        }, 400);
        Array.from({ length: this.page_index }).map((item, i) => {
          switch (parseInt(`${val}`)) {
            case i + 1:
              this.sites = this.sites.slice(
                this.pageSliceNum[i],
                parseInt(i + 1 + "0")
              );
          }
        });
      });
    }
  },
  mounted() {
    this.addNumHalder();
    console.log(this.page_index);
    this.$nextTick(function() {
      var _this = this;
      _this.$http
        .get("http://www.zg.com")
        .then(res => {
          res.pages.forEach(val => {
            _this.sites.push({
              id: val.id,
              name: val.name,
              mobile: val.mobile,
              idCard: val.idCard,
              address: val.address
            }),
              (_this.sites = _this.sites.slice(0, 10)); //默认显示十条数据
          });
        })
        .catch(res => {
          console.log(res);
        });
    });
  }
}  
</script>