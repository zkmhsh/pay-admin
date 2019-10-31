// 路由入口文件 需要在main.js中引用
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入页面组件 .vue可省略
import Home from '@/pages/Home'
//引入 router 模块js文件 .js可省略
import ErrorRoutes from './Error'
import IndexRoutes from './Home'
import SystemRoutes from './system'
import FinanceRoutes from './finance'
import PayRoutes from './pay'
import HelpRoutes from './help'




Vue.use(VueRouter)

let childrenRouters = ErrorRoutes.concat(IndexRoutes).concat(SystemRoutes).concat(FinanceRoutes).concat(PayRoutes).concat(HelpRoutes)
// 定义路由
let routes = [
  
  {
    path: '/',
    component: Home, 
    meta: {
      auth: true 
    },
    children: childrenRouters// 子路由指定的.vue挂载到path="/"指定的Home中的el-main <router-view></router-view>中 
  },
  {
    path: '*',
    hidden: true,
    name: 'NotFound',
    redirect: { path: '/404' }
  }
  
]

//创建 router 实例，然后传 `routes` 配置
const router =  new VueRouter({
  mode: 'history', // history 模式时，URL 就像正常的 url，不会url末尾自动添加 #/ 号了
  base: __dirname, // base ：默认值: “/”,在vue.config.js中设置了
  linkActiveClass: 'active',
  routes: routes
})

//路由全局前置守卫：router.beforeEach ：路由发生变化时先调用全局前置守卫进行权限等判断
router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})
export default router;