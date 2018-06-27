import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/IndexPage'
// 使用路由vue-router
Vue.use(Router)
// 使用vue-resource传输数据
Vue.use(VueResource)

export default new Router({
  mode: 'history',//这个是去除链接地址中的#
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    }
  ]
})
