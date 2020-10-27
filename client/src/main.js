import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueToasted from 'vue-toasted';

Vue.config.productionTip = false

//load Vue Toasted with font awesome support
Vue.use(VueToasted, {
  iconPack: 'fontawesome'
})

//load vue-directive-tooltip for small tooltip popups
import Tooltip from "vue-directive-tooltip";
import "vue-directive-tooltip/dist/vueDirectiveTooltip.css";
Vue.use(Tooltip);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
