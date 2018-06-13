import Vue from 'vue'
import App from './App'//app组件
import Layout from './components/layout'//公共组件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<Layout/>',
  // components: { Layout }
  render: h => h(Layout)

})
