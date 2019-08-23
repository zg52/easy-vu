<template>
  <div>
    <footer>
      <article>
        <div class="footer-nav flex flex-between">
          <div class="footer-nav-l flex flex-between">
            <div>
              <h3>考研资讯</h3>
              <ul>
                <li>
                  <a href target="_blank" title="国家政策">国家政策</a>
                </li>
                <li>
                  <a href target="_blank" title="院校公告">院校公告</a>
                </li>
                <li>
                  <a href target="_blank" title="媒体报道">媒体报道</a>
                </li>
                <li>
                  <a href target="_blank" title="考研动态">考研动态</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>复习备考</h3>
              <ul>
                <li>
                  <a href target="_blank" title="考研心路">考研心路</a>
                </li>
                <li>
                  <a href target="_blank" title="备考指导">备考指导</a>
                </li>
                <li>
                  <a href target="_blank" title="院校公告">院校公告</a>
                </li>
                <li>
                  <a href target="_blank" title="考试大纲">考试大纲</a>
                </li>
                <li>
                  <a href target="_blank" title="招生简章">招生简章</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>学府动态</h3>
              <ul>
                <li>
                  <a href target="_blank" title="教学动态">教学动态</a>
                </li>
                <li>
                  <a href target="_blank" title="教学管理">教学管理</a>
                </li>
                <li>
                  <a href target="_blank" title="教学案例">教学案例</a>
                </li>
                <li>
                  <a href target="_blank" title="学府荣誉">学府荣誉</a>
                </li>
                <li>
                  <a href target="_blank" title="学府活动">学府活动</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>教学辅导</h3>
              <ul>
                <li>
                  <a href target="_blank" title="学府网校">学府网校</a>
                </li>
                <li>
                  <a href target="_blank" title="集训辅导">集训辅导</a>
                </li>
                <li>
                  <a href target="_blank" title="名师讲座">名师讲座</a>
                </li>
                <li>
                  <a href target="_blank" title="资料下载">资料下载</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gywm">
            <h3>关注我们</h3>
            <a href title target="_blank">
              <i class="iconfont icon-weibo1"></i>新浪微博
              <img src="二维码待定" alt />
            </a>
            <a href title target="_blank" class="mt15">
              <i class="iconfont icon-weixin"></i>微信公众号
              <img src="二维码待定" alt />
            </a>
            <div class="phone">
              <span>客服热线：</span>
              <strong>400-010-1234</strong>
            </div>
          </div>
        </div>
      </article>

      <div class="footer">
        <div class="mt1200 flex flex-between diqu">
          <div class="diqu-list">
            <div class="hd">
              <h3 v-for="(yl,index) of yls" :class="{on:clickNum === index}" @click="clickNum = index">
                <em>{{yl.tit}}</em>
                <i></i>
              </h3>
            </div>
            <div class="bd">
              <ul>
                <li
                  v-for="(yl,index) of yls"
                 v-if="clickNum === index"
                >
                  <a>{{yl.cont}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-logo">
            <img src="../.././assets/image/footer-logo.png" alt="学府考研" />
          </div>
        </div>
        <div class="addres">
          <p>版权所有 北京学之府教育科技有限责任公司 京ICP备18055609号-1</p>
          <p>Copyright© 2009-2019 (xuefu.com) All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickNum: 0,
      yls: [
        { tit: "友情链接", cont: "南京企业培训" },
        { tit: "教学校区", cont: "快乐教育网" },
        { tit: "专业", cont: "江门初中辅导班" },
        { tit: "学校", cont: "德语培训" },
        { tit: "地区", cont: "美术高考网" }
        
      ]
    };
  }
};
</script>

<style lang="less">
</style>