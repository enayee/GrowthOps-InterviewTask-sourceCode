// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});
