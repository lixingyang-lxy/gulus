import Vue from 'vue'
import App from './App.vue'
//引入svg组件
import Icon from './icon'

//全局注册icon-svg
Vue.component('g-icon', Icon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
