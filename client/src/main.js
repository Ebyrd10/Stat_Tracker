import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueToasted from 'vue-toasted';

Vue.config.productionTip = false

//load Vue Toasted with font awesome support
Vue.use(VueToasted, {
  iconPack: 'fontawesome'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
