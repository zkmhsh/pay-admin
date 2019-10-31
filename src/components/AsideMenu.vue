
<template>
  <!-- 左侧导航栏：通过读取lib下的menu.js 定义的json数据进行渲染 -->
    <!--Element： router是使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    
    <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      unique-opened="true"
     background-color="#222d32"
      text-color="#fff"
      active-text-color="#ffd04b">

      <!--循环1级-->
      <template v-for="(item, itemIndex) in menus" >
        <!--1级有子级-->
        <el-submenu :index="'submenu'+itemIndex" v-if='!item.leaf' :key='item.path'>
          <template slot="title"><i :key="item.icon"></i><span>{{item.name}}</span></template>
          <template v-for="(er_menu, er_menuIndex) in item.children">
            <!--2级有子级-->
            <el-submenu :index="'submenu'+itemIndex+'_'+er_menuIndex" v-if='!er_menu.leaf' :key="er_menu.path">
              <template slot="title"><span>{{er_menu.name}}</span></template>
              <template v-for="thr_menu in er_menu.children">
                  <el-menu-item :index="thr_menu.path" :key='thr_menu.path'>
                    <span slot="title"> {{thr_menu.name}}</span>
                  </el-menu-item>
              </template>
            </el-submenu>
           <!--2级没有子级-->
            <el-menu-item v-else :index="er_menu.path" :key='er_menu.path'>
              <span slot="title"> {{er_menu.name}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
        <!--1级没有子级-->
        <el-menu-item v-else :index="item.path" :key='item.path'>
          <i :class="item.icon"></i><span slot='title'> {{item.name}}</span>
        </el-menu-item>
        
      </template>
    </el-menu>
</template>
<script>
  import menuItems from '../lib/menu.js'

  export default {
    name: "AsideMenu",
    data() {
      return {
        menus: menuItems
      }
    },
    methods: {
      handleOpen: function () {

      },
      handleClose: function () {

      }
    }
  }
</script>
<style>
/* 设置导航ul的宽度与el-aside一致 */
/* .el-menu {
    border: none!important;
  } */
.el-menu-vertical {
    display: inline-block;
    text-align: left;
    width: 240px;
    border: none!important;
  }
</style>



