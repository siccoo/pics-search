import Vue from 'vue';
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import App from './App.vue';



Vue.use(Vuetify, {
  iconfont: 'fa'
});

// import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.prototype.$axios;

new Vue({
  el: '#app',
  render: h => h(App)
})


