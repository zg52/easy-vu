
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
                <img :src="img_url" alt />
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
          <div class="fl relative">
            <span>选择地区</span>
            <ul>
              <li>
                <a
                  v-for="(lisItem,index) of lisItems"
                  :title="lisItem.cont"
                  :href="lisItem.href"
                >{{lisItem.cont}}</a>
              </li>
            </ul>
            <i></i>
          </div>
        </div>
        <div class="search relative">
          <form action>
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
              <input type="text" placeholder="请输入您要搜索的课程" autofocus />
              <input type="button" />
            </label>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
    img_url:'../.././assets/image/',
      tits: [
        { href: "/", tit_l: "网站地图" },
        { href: "/", tit_l: "关于我们" },
        { href: "/", tit_l: "联系我们" },
        { href: "/", tit_l: "加盟合作" }
      ],
      lisItems: [
        { href: "/", cont: "北京" },
        { href: "/", cont: "陕西" },
        { href: "/", cont: "湖北" },
        { href: "/", cont: "南京" }
      ],
      wangKs: [
        { cont: "北京" },
        { cont: "陕西" },
        { cont: "湖北" },
        { cont: "南京" }
      ]
    };
  }
};
</script>