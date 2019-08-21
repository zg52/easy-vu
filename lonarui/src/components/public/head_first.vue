
<style lang="less">
</style>
<template>
  <div>
    <header>
      <div class="h-top">
        <div class="mt1200 flex flex-between">
          <ul>	
            <li v-for="(tit,index) of tits" :key="tit.id">
              <a :href="tit.href" :title="tit.tit_l" target="_blank">{{tit.tit_l}}</a>
            </li>
          </ul>
          <div class="h-top-right">
            <ol>
              <li>
                <span>
                  <em>学习工具</em>
                  <i></i>
                </span>
                <div>
                  <a href title="App下载" target="_blank">app</a>
                </div>
              </li>
              <li>
                <i class="iconfont icon-weixin1"></i>
                <img src="../.././assets/image/index-htop-weibo.png" alt />
              </li>
              <li>
                <i class="iconfont icon-weibo"></i>
                <img src="../.././assets/image/index-htop-weibo.png" alt />
              </li>
              <li>客服电话：400-010-1234</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="h-bot mt1200 flex flex-between mt30">
        <div class="clearfix">
          <div class="fl logo">
            <img src="../.././assets/image/logo.png" alt="学府考研" />
          </div>
          <div class="fl relative" @mouseenter.prevent="show = true">
            <span>{{area}}</span>
            <ul v-show="show">
              <li>
                <a
                  v-for="(lisItem,index) of lisItems"
                  :title="lisItem.cont"
                  :href="lisItem.href"
									@click="area = lisItem.cont;show = false"
                >{{lisItem.cont}}</a>
              </li>
            </ul>
            <i></i>
          </div>
        </div>
        <div class="search relative">
          <form>
            <label for="serach" class="flex flex-between relative">
              <div class="serach-list" id="serachList">
                <span>
                  <em>网课e</em>
                  <i class="icon-xiajiantou iconfont"></i>
                  <i class="line">|</i>
                </span>
                <ul>
                  <li v-for="(wangK,index) of wangKs" :title="wangK.cont">{{wangK.cont}}</li>
                </ul>
              </div>
              <input @click.prevent="tipHide" @mouseleave="tipShow" type="text" :placeholder.tip="tip" autofocus v-model="serachCont" />
              <input type="button" @click.prevent="searchSubmit"/>
            </label>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "page-top",
  data() {
    return {
			show:true,
			area:'选择地区',
			serachCont:'',
			tip:'请输入您要搜索的课程',
      tits: Object.freeze([
        { href: "/", tit_l: "网站地图" },
        { href: "/", tit_l: "关于我们" },
        { href: "/", tit_l: "联系我们" },
        { href: "/", tit_l: "加盟合作" }
      ]),
      lisItems: Object.freeze([
        { cont: "北京" },
        { cont: "陕西" },
        { cont: "湖北" },
        { cont: "南京" }
      ]),
      wangKs: Object.freeze([
        { cont: "北京" },
        { cont: "陕西" },
        { cont: "湖北" },
        { cont: "南京" }
      ])
    }
  },
	methods: {
		tipHide () {
			this.tip = ''
		},
		tipShow () {
				this.tip = '请输入您要搜索的课程'
		},
		// 表单搜索
		searchSubmit () {
			const _this = this;
			function submitCont () {
					_this.$http.post(
					"api/data/student", //代理跨域 只适用于开发环境
					{ name: "lonarui" }).then( res => {
						console.log(res)
					}).catch( res => {
						alert('异常！请稍后搜索')
					})
			}
		this.serachCont == '' || null || undefined ?
											 alert('请输入您要搜索的关键词') :
											 submitCont()
	},
	mounted () {
		this.$nextTick(function(){
			 
		})
	}
}
}
</script>