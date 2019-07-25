import Vue from 'vue';
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import App from './App.vue';
import router from './router/index';



Vue.use(Vuetify, {
  iconfont: 'fa'
});

// import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

axios.defaults.baseUrl = 'https://api.unsplash.com/photos/?client_id=b6e17d4411cecc6bbf91fe4a65ab56fb233f079cd93525f3548876a3b12237fc';
Vue.prototype.$axios;

new Vue({
  el: '.app',
  router,
  render: h => h(App)
})


