import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.prototype.$axios;

new Vue({
  el: '#app',
  render: h => h(App)
})
