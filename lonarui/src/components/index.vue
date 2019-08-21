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
                  :title="nav.tit">{{ nav.tit }}</a>
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
                        :class="{on: clickNum === index}"
                        @mouseenter.prevent="clickNum = index">
                      <h3>{{leftNav.tit}}<i class="iconfont icon-jiantou"></i></h3>
                      <div>
                        <a
                          v-for="titChild of leftNav.titChilds"
                          :href="leftNav.href"
                          :title="leftNav.tit1"
                          target="_blank">{{ titChild.tit1 }}</a>
                      </div>
                    </li>

                  </ul>
                  <div class="zhe"></div>
                </div>
                <div class="bd">
                  <ul v-for="(leftNav,index) of leftNavs" v-show="clickNum == index">
                    <div>
                      <h3>{{leftNav.contTit}}</h3>
                      <li>
                        <a
                          v-for="titChild of leftNav.titChilds"
                          :href="leftNav.href1"
                          :title="leftNav.tit2"
                          target="_blank">{{ titChild.tit2 }}</a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div class="login t-center mt30">
                <div class="portrait pt30">
                  <div><img src=".././assets/image/index-login.png" alt=""></div>
                  <p>欢迎来到学府考研！</p>
                </div>
                <div class="loging pt20">
                  <button>登录</button> <br>
                  <button>注册有礼</button>
                </div>
                <div class="flex flex-between flex-wrap pt30 login-nav">
                  <a
                    v-for="loginList of loginLists"
                    :href="loginList.href"
                    :title="loginList.tit"
                    target="_blank">{{ loginList.tit }}</a>
                </div>

              </div>
            </div>
          </div>
          <div class="index-href">
            <a href="./public-footer.html" target="_blank"><img src=".././assets/image/index-banner.png" class="ban"
                height="450"></a>
          </div>
        </div>
      </div>
    </section>
    <!-- main -->
    <section class="main-wrap">
      <div class="mt1200 flex flex-between index-card pt30">
      <a  v-for="(card,index) of cards"
                  :key="card.id"
                  :href="card.href"
                  :title="card.tit">
                  <span>{{ card.tit }}<br>{{ card.ziXun }}</span><img :src="card.cardImg" :alt="card.tit"></a>
      </div>
      <div class="mt1200 flex flex-between index-toutiao mt30">
        <div class="toutiao-l clearfix">
          <div class="img fl"><img src=".././assets/image/index-toutiao.png" alt=""></div>
          <div class="fl">
            <div class="bd">
              <div>
                <a href="" title="" target="_blank">2019考研：应届生不能报考的考研专业</a>
                <a href="" title="" target="_blank">19考研:跨专大专业</a>
                <a href="" title="" target="_blank">2020学府考研火箭</a>
                <a href="" title="" target="_blank">2020学府考研火箭</a><a href="" title="" target="_blank">2020学府考研火箭</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="" target="_blank" title="MORE>>">MORE&gt;&gt;</a>
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
              <span class="on"><em>常规集训</em><i></i></span>
              <span><em>四级集训</em><i></i></span>
              <span><em>名校定向</em><i></i></span>
              <span><em>专业定向</em><i></i></span>
              <span><em>一对一</em><i></i></span>
            </div>
          </div>
          <div class="bd mt1200 list1-cont mt30">
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-l">
                <div class="bd2">
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          20ddddd考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd2">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>精选课程</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>

                <div class="flex flex-between flex-wrap bd-list-c1">
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
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
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-l">
                <div class="bd2">
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          20ddddd考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd2">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>精选课程</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>

                <div class="flex flex-between flex-wrap bd-list-c1">
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                </div>


              </div>
              <div class="bd-list-r">
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热门课程</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-l">
                <div class="bd2">
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          20ddddd考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd2">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>精选课程</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>

                <div class="flex flex-between flex-wrap bd-list-c1">
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
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
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-l">
                <div class="bd2">
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          20ddddd考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd2">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>精选课程</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>

                <div class="flex flex-between flex-wrap bd-list-c1">
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
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
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-l">
                <div class="bd2">
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          20ddddd考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd2">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>精选课程</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>

                <div class="flex flex-between flex-wrap bd-list-c1">
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
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
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <!-- 学府网校 -->
      <article>
        <div class="index-list1 mt1200 mt30 index-list2" id="index-list2">
          <div class="lsit-tit flex flex-between">
            <div>
              <h3>学府网校</h3>
            </div>
            <div class="hd">
              <span class="on"><em>公共课</em><i></i></span>
              <span><em>199联考类</em><i></i></span>
              <span><em>近期直播</em><i></i></span>
              <span><em>免费视频</em><i></i></span>
            </div>
          </div>
          <div class="bd mt1200 list1-cont mt30">
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-l">
                <div class="bd2">
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          20ddddd考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd2">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>精选课程</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>

                <div class="flex flex-between flex-wrap bd-list-c1">
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
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
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-l">
                <div class="bd2">
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          20ddddd考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd2">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>精选课程</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>

                <div class="flex flex-between flex-wrap bd-list-c1">
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
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
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-l">
                <div class="bd2">
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          20ddddd考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd2">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>精选课程</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>

                <div class="flex flex-between flex-wrap bd-list-c1">
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
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
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-l">
                <div class="bd2">
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          20ddddd考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="bd-list-l-tit pt50">
                      <h4>寒假集训营</h4>
                      <i><em></em></i>
                    </div>
                    <div class="bd-list-cont mt25">
                      <div>
                        <span>
                          2020考研（签约）全程班
                        </span>
                        <p>零基础长线备考拼高分</p>
                        <div>
                          <a href="" target="_blank"> <img src=".././assets/image/index-jxy.png" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hd2">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>精选课程</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>

                <div class="flex flex-between flex-wrap bd-list-c1">
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
                  </div>
                  <div>
                    <a href="" target="_blank"><img src=".././assets/image/en.png" alt="" width="294" height="165"></a>
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
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020fewfewffewafew考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <!-- 教学专区 -->
      <article>
        <div class="index-list1 mt1200 mt30" id="index-list3">
          <div class="lsit-tit flex flex-between">
            <div>
              <h3>教学专区</h3>
            </div>
            <div class="hd">
              <span class="on"><em>教学动态</em><i></i></span>
              <span><em>教学管理</em><i></i></span>
              <span><em>教学案例</em><i></i></span>
              <span><em>名师试听</em><i></i></span>
            </div>
          </div>
          <div class="bd mt1200 list1-cont mt30">
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>教学咨询</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="w-list flex flex-between flex-wrap">
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a> <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a> <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a> <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a> <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a> <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a> <span>学府考研荣获2018年教育最佳机构</span></div>
                </div>

                <div class="flex flex-between tit  actiy">
                  <h3>热门活动</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="flex flex-between actiy-list">
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
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
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>教学咨询</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="w-list flex flex-between flex-wrap">
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                </div>

                <div class="flex flex-between tit  actiy">
                  <h3>热门活动</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="flex flex-between actiy-list">
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                </div>
              </div>
              <div class="bd-list-r">
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热门课程</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>教学咨询</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="w-list flex flex-between flex-wrap">
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                </div>

                <div class="flex flex-between tit  actiy">
                  <h3>热门活动</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="flex flex-between actiy-list">
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                </div>
              </div>
              <div class="bd-list-r">
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热门课程</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>教学咨询</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="w-list flex flex-between flex-wrap">
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/jx.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                </div>

                <div class="flex flex-between tit  actiy">
                  <h3>热门活动</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="flex flex-between actiy-list">
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                </div>
              </div>
              <div class="bd-list-r">
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热门课程</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">20wfdrFE3fe20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <!-- 文化活动 -->
      <article>
        <div id="index-list3" class="index-list1 mt1200 mt30 index-list4">
          <div class="lsit-tit flex flex-between">
            <div>
              <h3>文化活动</h3>
            </div>
            <div class="hd">
              <span class="on"><em>高分颁奖</em><i></i></span>
              <span><em>教学成果</em><i></i></span>
              <span><em>学员活动</em><i></i></span>
            </div>
          </div>
          <div class="bd mt1200 list1-cont mt30">
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>教学咨询</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="w-list flex flex-between flex-wrap">
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                </div>

                <div class="flex flex-between tit  actiy">
                  <h3>热门活动</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="flex flex-between actiy-list">
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                </div>
              </div>
              <div class="bd-list-r">
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热门课程</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>教学咨询</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="w-list flex flex-between flex-wrap">
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                </div>

                <div class="flex flex-between tit  actiy">
                  <h3>热门活动</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="flex flex-between actiy-list">
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                </div>
              </div>
              <div class="bd-list-r">
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热门课程</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-list flex flex-between pl30">
              <div class="bd-list-c">
                <div class="flex flex-between tit">
                  <h3>教学咨询</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="w-list flex flex-between flex-wrap">
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                  <div><a title="" target="_blank" href=""><img src=".././assets/image/fr.png" alt="" width="286"
                        height="161"></a>
                    <span>学府考研荣获2018年教育最佳机构</span></div>
                </div>

                <div class="flex flex-between tit  actiy">
                  <h3>热门活动</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="flex flex-between actiy-list">
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                  <div class="flex flex-between actiy-list1">
                    <div class="list-l">
                      <h4>ACCA特许公认会计师</h4>
                      <a href="" title="" target="_blank">进阶财会大魔王<i>></i></a>
                    </div>
                    <div>
                      <img src=".././assets/image/index-shi.png" alt="" width="127" height="98">
                    </div>
                  </div>
                </div>
              </div>
              <div class="bd-list-r">
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热门课程</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
                <div class="bd-list-r1">
                  <div class="flex flex-between tit">
                    <h3>热点资讯</h3>
                  </div>
                  <div class="list flex  mt20">
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ol>
                    <ul>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数20考研数20考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                      <li><a href="" title="" target="_blank">2020考研数学全程班2020考研数学全程班</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- 教学校区 -->
      <article>
        <div class="index-list1 mt1200 mt30" id="teach">
          <div class="lsit-tit flex flex-between">
            <div>
              <h3>教学校区</h3>
            </div>
            <div class="hd">
              <span class="on"><em>北京分校</em><i></i></span>
              <span><em>陕西分校</em><i></i></span>
              <span><em>四川分校</em><i></i></span>
              <span><em>湖北分校</em><i></i></span>
              <span><em>江苏分校</em><i></i></span>
            </div>
          </div>
          <div class="bd mt1200 list1-cont mt30">
            <div class="bd-list flex flex-between pl30">
              <div class="map-l">
                <div class="flex flex-between tit">
                  <h3>北京分校</h3>
                  <a href="" title="点击查看更多" target="_blank">MORE&gt;&gt;</a>
                </div>
                <div class="map-tab">
                  <div class="flex flex-between mt30">
                    <div class="map-img"><img src=".././assets/image/index-bj-map.png" alt=""></div>
                    <div class="map-cont">
                      <p>
                        距离初试考试的日子越来越近，不少同学对考研政治的复习还有所欠缺，因而变
                        得紧张兮兮。对此，学府考研建议考生在距离初试开始前，先认真归纳总结下之前复
                        习过的内容，再根据学府整理的马克思主义哲学原理和自己复习的内容做好备考工作
                        做好备考工作。
                      </p>
                      <ul>
                        <li><i class="iconfont icon-wangzhi"></i><span>网址：http://www.xuefu.com</span></li>
                        <li><i class="iconfont icon-dizhi"></i>地点：北京市海淀区中关村大街甲28号海淀文化艺术大厦B座508室</li>
                        <li><i class="iconfont icon-dianhua"></i>联系电话：400-010-1234</li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex flex-between mt30">
                    <div class="map-img"><img src=".././assets/image/index-xian-map.png" alt=""></div>
                    <div class="map-cont">
                      <p>
                        距离初试考试的日子越来越近，不少同学对考研政治的复习还有所欠缺，因而变
                        得紧张兮兮。对此，学府考研建议考生在距离初试开始前，先认真归纳总结下之前复
                        习过的内容，再根据学府整理的马克思主义哲学原理和自己复习的内容做好备考工作
                        做好备考工作。
                      </p>
                      <ul>
                        <li><i class="iconfont icon-wangzhi"></i><span>网址：http://www.exuefu.com</span></li>
                        <li><i class="iconfont icon-dizhi"></i>地点：西安市雁塔区海港城波涛眼镜6楼</li>
                        <li><i class="iconfont icon-dianhua"></i>联系电话：029-63018728</li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex flex-between mt30">
                    <div class="map-img"><img src=".././assets/image/index-chengdu-map.png" alt=""></div>
                    <div class="map-cont">
                      <p>
                        距离初试考试的日子越来越近，不少同学对考研政治的复习还有所欠缺，因而变
                        得紧张兮兮。对此，学府考研建议考生在距离初试开始前，先认真归纳总结下之前复
                        习过的内容，再根据学府整理的马克思主义哲学原理和自己复习的内容做好备考工作
                        做好备考工作。
                      </p>
                      <ul>
                        <li><i class="iconfont icon-wangzhi"></i><span>网址：http://www.scxuefu.com</span></li>
                        <li><i class="iconfont icon-dizhi"></i>地点：四川省成都市武侯区科华北路71号世外桃源广场A座11层</li>
                        <li><i class="iconfont icon-dianhua"></i>联系电话：028-8550-3549</li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex flex-between mt30">
                    <div class="map-img"><img src=".././assets/image/index-wuhan-map.png" alt=""></div>
                    <div class="map-cont">
                      <p>
                        距离初试考试的日子越来越近，不少同学对考研政治的复习还有所欠缺，因而变
                        得紧张兮兮。对此，学府考研建议考生在距离初试开始前，先认真归纳总结下之前复
                        习过的内容，再根据学府整理的马克思主义哲学原理和自己复习的内容做好备考工作
                        做好备考工作。
                      </p>
                      <ul>
                        <li><i class="iconfont icon-wangzhi"></i><span>网址：http://wuhan.xuefu.com</span></li>
                        <li><i class="iconfont icon-dizhi"></i>地点：武汉市洪山区八一路中科开物大厦22层（武汉大学正门）</li>
                        <li><i class="iconfont icon-dianhua"></i>联系电话：027-87639318</li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex flex-between mt30">
                    <div class="map-img"><img src=".././assets/image/index-nanjing-map.png" alt=""></div>
                    <div class="map-cont">
                      <p>
                        距离初试考试的日子越来越近，不少同学对考研政治的复习还有所欠缺，因而变
                        得紧张兮兮。对此，学府考研建议考生在距离初试开始前，先认真归纳总结下之前复
                        习过的内容，再根据学府整理的马克思主义哲学原理和自己复习的内容做好备考工作
                        做好备考工作。
                      </p>
                      <ul>
                        <li><i class="iconfont icon-wangzhi"></i><span>网址：http://www.njxuefu.com</span></li>
                        <li><i class="iconfont icon-dizhi"></i>地点：南京市广州路2号龙世中心内部</li>
                        <li><i class="iconfont icon-dianhua"></i>联系电话：025-88018266</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="map-r">
                <div class="flex flex-between tit">
                  <h3>诚邀加盟</h3>
                </div>
                <div class="from">
                  <form id="formDate">
                    <label for=""><i class="iconfont icon-user"></i><input type="text" placeholder="请输入您的姓名" id="name"
                        name="name"></label>
                    <label><i class="iconfont icon-shouji"></i>
                      <input type="tel" placeholder="请输入您的电话" name="mobile" id="mobile"></label>
                    <input type="button" value="提交加盟信息" class="submit" id="submit">
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article>
        <div class="jigou mt1200 mt30">
          <h3>合作机构</h3>
          <div class="flex flex-between jigou-list">
            <a><img src=".././assets/image/index-xinlang.png" alt="新浪"></a>
            <a><img src=".././assets/image/index-tenxun.png" alt="腾讯"></a>
            <a><img src=".././assets/image/index-xinhua.png" alt="新华"></a>
            <a><img src=".././assets/image/index-xinjing.png" alt="新东"></a>
            <a><img src=".././assets/image/index-souhu.png" alt="搜狐"></a>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        dataUrl: this.$store.state.third.URL,
        // 导航标题
        navs: Object.freeze([
          { href: '/', tit: '研招网' },
          { href: '/', tit: '院校库' },
          { href: '/', tit: '专业库' },
          { href: '/', tit: '学府名师' },
          { href: '/', tit: '学府荣誉' },
          { href: '/', tit: '全国分校' },
          { href: '/', tit: '媒体报道' }
        ]),
        // 左栏导航
        clickNum: 0,
        leftNavs: Object.freeze([
            {
            tit: '高端集训计划',
            contTit: '集训寄宿',
            titChilds: Object.freeze([
              { href: '', tit1: '半年集训', href1: '/', tit2: '寒假体验' },
              { href: '', tit1: '暑期集训', href1: '/', tit2: '暑期集训' },
              { href: '', tit1: '全年集训', href1: '/', tit2: '半年集训' },
              { href: '', tit1: '冲刺集训', href1: '/', tit2: '秋季集训' },
              { href1: '/', tit2: '全年集训' },
              { href1: '/', tit2: '二战考研' },
              { href1: '/', tit2: 'VIP高端辅导' }
            ])
          },
          {
            tit: '火箭周末走读',
            contTit: '专业定向',
            titChilds: Object.freeze([
              { href: '', tit1: '公共课', href1: '', tit2: '金融硕士' },
              { href: '', tit1: '全程（含专业课）',href1: '', tit2: '会计专硕' },
              { href: '', tit1: '考研公共课',href1: '', tit2: '经济学硕士' },
              { href: '', tit1: '199联考',href1: '', tit2: '教育硕士' },
              { href1: '', tit2: '新闻传播' },
              { href1: '', tit2: '心理学硕士' },
              { href1: '', tit2: '行政管理' },
              { href1: '', tit2: '翻译硕士' },
              { href1: '', tit2: '法律硕士' },
              { href1: '', tit2: '计算机硕士' },
              { href1: '', tit2: '医学硕士' }
            ])
          },
          {
            tit: '网络在线',
            contTit: '2020考研',
            titChilds: Object.freeze([
              { href: '',tit1: '思想政治', href1: '', tit2: '考研英语' },
              { href: '', tit1: '英语一 / 二' , href1: '', tit2: '考研政治' },
              { href: '', tit1: '199管理类综合' , href1: '', tit2: '考研数学' },
              { href1: '', tit2: '管理类联考' },
              { href1: '', tit2: '荣耀全程班' },
              { href1: '', tit2: '荣耀VIP全程班' },
              { href1: '', tit2: '单项班' }
            ])
          },
          {
            tit: '1对1个性化',
            contTit: '特色系列',
            titChilds: Object.freeze([
              { href: '', tit1: '公共课1对1',href1: '', tit2: '周末走读' },
              { href: '', tit1: '自主命题专业1对1',href1: '', tit2: '大三早起' },
              { href: '', tit1: '统考 / 联考专业1对1',href1: '', tit2: '线上网络畅学' },
              { href1: '', tit2: '个性化1对1'},
              { href1: '', tit2: '在职考研'}
            ])
          }
        ]),
        // 右栏登录导航
        loginLists: [],
        // main start
        cards: []
      }
    },
    mounted() {
      const _this = this;

      this.$nextTick(function(){
            _this.$http.getJson('api/byxf/data/pageData').then(
              res => {
                let mes1 = res.loginList;
                let mes2 = res.cardList;
               mes1.forEach((val) => {
                _this.loginLists.push(
                  {href:'', tit:val}
                )});
                mes2.forEach((val) => { //卡片列表
                console.log(val);
                 _this.cards.push(
                 {
                   tit: val.tit,
                   ziXun: val.ziXun,
                   cardImg: _this.dataUrl + val.cardImg,
                  })
                })

              }).catch(res => {
                console.log(res);
              })
      });
      console.log(_this.$store.state.third.URL);
    }
  }
</script>
<style scoped="less">
</style>
