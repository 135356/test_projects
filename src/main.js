import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import An from '@/libs/js_vue/src'
import An_ui from '@/libs/js_vue/ui'
import HeadNav from '@/components/HeadNav'

Vue.use(An);
Vue.use(An_ui);
Vue.component('HeadNav',HeadNav);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
