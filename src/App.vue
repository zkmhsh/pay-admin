// main.js 将整个App.vue 文件挂载到入口页面index.html上
<template>
  <!-- 左上下布局参考Element文档：container布局容器 -->
  <el-container id="app">
    <!-- 引用Header组件【标签名对应compents中的组件名即可饮用】，可传参数：组件内props定义接受的参数 -->
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside style="width: 240px;"  >
        <AsideMenu></AsideMenu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- 引用Footer组件，可传参数：组件内props定义接受的参数 -->
        <el-footer>
          <Footer copyright="©北京中科羲和智慧信息技术有限公司 保留所有权利。" author="中科羲和" icpCert="京ICP备190100009999" gab="京公网安备19100101011"></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @指src目录
import Footer from "@/components/Footer.vue"; // 引入Footer.vue

import Header from "@/components/Header.vue"; // 引入Header.vue

import AsideMenu from "@/components/AsideMenu"; // 引入左侧菜单

export default {
  name: "app",
  components: {
    // 引入的组件
    Footer,
    Header,
    AsideMenu
  },
  computed: {
      
  },
  mounted (){
   
  }

};
</script>

<style>
/* 整体布局样式 */

body {
  margin: 0 0 auto;
  padding: 0 0;
}
body > .el-container {
  margin-bottom: 0px;
}
/* 整个页面撑开，设置100% 是index.html中设置了html和body高度 */
.el-container {
  height: auto;
  min-height: 100%;
}
/* 底部样式 */
.el-footer {
  background-color: #555;
  color: #fff;
  text-align: center;
  line-height: 30px;
  height: 30px;
  padding: 0 !important;
}
/* 头部样式 */
.el-header {
  background-color: #3c8dbc;
  height: 60px;
  padding: 0;
  line-height: 60px;
}
.el-dropdown {
  float: right;
  margin-right: 20px;
}
/* 侧边菜单 */
.el-aside {
  background-color: #222d32;
  color: #333;
  text-align: left;
  line-height: 35px;
}

/* 主题内容 */
.el-main {
  background-color: #fff;
  height: 100%;
}
.el-card__header{
  text-align: center;
}
</style>
