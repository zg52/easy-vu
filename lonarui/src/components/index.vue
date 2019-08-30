<template>
  <div>
    <section>
      <div class="main">
        <div class="mt1200">
          <div class="index-nav mt30 flex flex-between">
            <div class="all-course">全部课程分类</div>
            <div class="nav">
              <nav>
                <a
                  v-for="(nav,index) of navs"
                  :key="nav.id"
                  :href="nav.href"
                  :title="nav.tit"
                >{{ nav.tit }}</a>
              </nav>
            </div>
          </div>
        </div>
        <div class="index-banner relative w100">
          <div class="mt1200">
            <div class="flex flex-between slidebar mt1200">
              <div class="course-list relative">
                <div class="hd">
                  <ul>
                    <li
                      v-for="(leftNav,index) of leftNavs"
                      :class="{on: clickNum0 === index}"
                      @mouseenter="clickNum0 = index"
                    >
                      <h3>
                        {{leftNav.tit}}
                        <i class="iconfont icon-jiantou"></i>
                      </h3>
                      <div>
                        <a
                          v-for="titChild of leftNav.titChilds"
                          :href="leftNav.href"
                          :title="leftNav.tit1"
                          target="_blank"
                        >{{ titChild.tit1 }}</a>
                      </div>
                    </li>
                  </ul>
                  <div class="zhe"></div>
                </div>
                <div class="bd">
                  <ul v-for="(leftNav,index) of leftNavs" v-show="clickNum0 == index">
                    <div>
                      <h3>{{leftNav.contTit}}</h3>
                      <li>
                        <a
                          v-for="titChild of leftNav.titChilds"
                          :href="leftNav.href1"
                          :title="leftNav.tit2"
                          target="_blank"
                        >{{ titChild.tit2 }}</a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div class="login t-center mt30">
                <div class="portrait pt30">
                  <div>
                    <img src=".././assets/image/index-login.png" alt />
                  </div>
                  <p>欢迎来到学府考研！</p>
                </div>
                <div class="loging pt20">

                  <router-link to="/login" :style="colors" v-show="loginShow"> <button>登录</button></router-link>
                  <br />
                  <button>注册有礼</button>
                </div>
                <div class="flex flex-between flex-wrap pt30 login-nav">
                  <a
                    v-for="loginList of loginLists"
                    :href="loginList.href"
                    :title="loginList.tit"
                    target="_blank"
                  >{{ loginList.tit }}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="index-href">
            <a href="./public-footer.html" target="_blank">
              <img src=".././assets/image/index-banner.png" class="ban" height="450" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- main -->
    <section class="main-wrap">
      <div class="mt1200 flex flex-between index-card pt30">
        <a v-for="(card,index) of cards" :key="card.id" :href="card.href" :title="card.tit">
          <span>
            {{ card.tit }}
            <br />
            {{ card.ziXun }}
          </span>
          <img :src="card.cardImg" :alt="card.tit" />
        </a>
      </div>
      <div class="mt1200 flex flex-between index-toutiao mt30">
        <div class="toutiao-l clearfix">
          <div class="img fl">
            <img src=".././assets/image/index-toutiao.png" alt />
          </div>
          <div class="fl">
            <div class="bd">
              <div>
                <a
                  v-for="(headline,index) of headlines"
                  :key="headline.id"
                  :href="headline.href"
                  :title="headline.tit"
                >{{headline.tit}}</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href target="_blank" title="MORE>>">MORE&gt;&gt;</a>
        </div>
      </div>
      <!-- 集训营 -->
      <article>
        <div class="index-list1 mt1200 mt30">
          <div class="lsit-tit flex flex-between">
            <div>
              <h3>集训营</h3>
            </div>
            <div class="hd">
              <span
                v-for="(wxList,index) of wxLists"
                :class="{on: clickNum === index}"
                @mouseenter="clickNum = index"
              >
                <em>{{wxList.tit}}</em>
                <i></i>
              </span>
            </div>
          </div>
          <div class="bd mt1200 list1-cont mt30">
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-l">
                <div class="bd2">
                  <div v-for="(leftSlide,index) of leftSlides" v-show="clickNum1 == index">
                    <div class="bd-list-l-tit pt50">
                      <h4>{{leftSlides.h2}}</h4>
                      <i>
                        <em></em>
                      </i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>{{leftSlide.des1}}</span>
                        <p>{{leftSlide.des2}}</p>
                        <div>
                          <a href target="_blank">
                            <img :src="leftSlide.desImg" alt />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd2">
                  <i
                    v-for="(leftSlide,index) of leftSlides"
                    :class="{on:clickNum1 === index}"
                    @click="clickNum1 = index"
                  ></i>
                </div>
              </div>
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>精选课程</h3>
                  <a href title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>

                <div class="flex flex-between flex-wrap bd-list-c1">
                  <div v-for="(wxListImg,index) of wxListImgs">
                    <a href target="_blank">
                      <img :src="wxListImg.contImg" alt width="294" height="165" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="bd-list-r">
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热门课程</h3>
                  </div>
                  <div class="list flex mt20">
                    <ol>
                      <li v-for="(kcList,index) of kcLists">{{index + 1}}</li>
                    </ol>
                    <ul>
                      <li v-for="(kcList,index) of kcLists">
                        <a href :title="kcList.item" target="_blank">{{kcList.item}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex mt20">
                    <ol>
                      <li v-for="(kcList,index) of kcLists">{{index + 1}}</li>
                    </ol>
                    <ul>
                      <li v-for="(kcList,index) of kcLists">
                        <a href :title="kcList.item" target="_blank">{{kcList.item}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      loginShow: true,
      dataUrl: this.$store.state.third.URL,
      // 导航标题
      navs: Object.freeze([
        { href: "/", tit: "研招网" },
        { href: "/", tit: "院校库" },
        { href: "/", tit: "专业库" },
        { href: "/", tit: "学府名师" },
        { href: "/", tit: "学府荣誉" },
        { href: "/", tit: "全国分校" },
        { href: "/", tit: "媒体报道" }
      ]),
      // 左栏导航
      clickNum0: 0,
      clickNum: 0,
      clickNum1: 0,
      leftNavs: Object.freeze([
        {
          tit: "高端集训计划",
          contTit: "集训寄宿",
          titChilds: Object.freeze([
            { href: "", tit1: "半年集训", href1: "/", tit2: "寒假体验" },
            { href: "", tit1: "暑期集训", href1: "/", tit2: "暑期集训" },
            { href: "", tit1: "全年集训", href1: "/", tit2: "半年集训" },
            { href: "", tit1: "冲刺集训", href1: "/", tit2: "秋季集训" },
            { href1: "/", tit2: "全年集训" },
            { href1: "/", tit2: "二战考研" },
            { href1: "/", tit2: "VIP高端辅导" }
          ])
        },
        {
          tit: "火箭周末走读",
          contTit: "专业定向",
          titChilds: Object.freeze([
            { href: "", tit1: "公共课", href1: "", tit2: "金融硕士" },
            { href: "", tit1: "全程（含专业课）", href1: "", tit2: "会计专硕" },
            { href: "", tit1: "考研公共课", href1: "", tit2: "经济学硕士" },
            { href: "", tit1: "199联考", href1: "", tit2: "教育硕士" },
            { href1: "", tit2: "新闻传播" },
            { href1: "", tit2: "心理学硕士" },
            { href1: "", tit2: "行政管理" },
            { href1: "", tit2: "翻译硕士" },
            { href1: "", tit2: "法律硕士" },
            { href1: "", tit2: "计算机硕士" },
            { href1: "", tit2: "医学硕士" }
          ])
        },
        {
          tit: "网络在线",
          contTit: "2020考研",
          titChilds: Object.freeze([
            { href: "", tit1: "思想政治", href1: "", tit2: "考研英语" },
            { href: "", tit1: "英语一 / 二", href1: "", tit2: "考研政治" },
            { href: "", tit1: "199管理类综合", href1: "", tit2: "考研数学" },
            { href1: "", tit2: "管理类联考" },
            { href1: "", tit2: "荣耀全程班" },
            { href1: "", tit2: "荣耀VIP全程班" },
            { href1: "", tit2: "单项班" }
          ])
        },
        {
          tit: "1对1个性化",
          contTit: "特色系列",
          titChilds: Object.freeze([
            { href: "", tit1: "公共课1对1", href1: "", tit2: "周末走读" },
            { href: "", tit1: "自主命题专业1对1", href1: "", tit2: "大三早起" },
            {
              href: "",
              tit1: "统考 / 联考专业1对1",
              href1: "",
              tit2: "线上网络畅学"
            },
            { href1: "", tit2: "个性化1对1" },
            { href1: "", tit2: "在职考研" }
          ])
        }
      ]),
      // 右栏登录导航
      loginLists: [],
      // main start
      cards: [],
      headlines: [], //头条
      wxLists: [], //网校列表C
      wxListImgs: [],
      leftSlides: [],
      kcLists: [],
      // style
      colors: {
        color:'#fff'
      }
    };
  },
  methods: {
    ops(index) {
      this.clickNum0 = index;
    }
  },
  mounted() {
    const _this = this;
    // 判断是否登陆

    this.$nextTick(function() {
      _this.$http
        .getJson("api/byxf/data/pageData2")
        .then(res => {
          console.log(res);
          getMes(res.loginList, _this.loginLists);
          getMes(res.headlines, _this.headlines);
          getMes(res.wxLists.wxTit, _this.wxLists);
          function getMes(x, y) {
            x.forEach(val => {
              y.push({ tit: val });
            });
          }
          res.cardList.forEach(val => {
            //卡片列表
            _this.cards.push({
              tit: val.tit,
              ziXun: val.ziXun,
              cardImg: _this.dataUrl + val.cardImg
            });
          });

          res.wxLists.wxCont.wxContTit.map(val => {
            //左栏切换
            _this.leftSlides.push({
              h2: val.h2,
              des1: val.des1,
              des2: val.des2,
              desImg: _this.dataUrl + val.desImg
            });
          });
          res.wxLists.wxCont.wxContImg.some(val => {
            this.wxListImgs.push({ contImg: _this.dataUrl + val });
          });
          res.wxLists.wxCont.wxContList.some(val => {
            this.kcLists.push({ item: val.tit });
          })
        })
        .catch(res => {
          console.log(res);
        })
    })
  }
}
</script>
