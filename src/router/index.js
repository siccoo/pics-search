import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from './components/layout/Header';
import SearchPhoto from './components/SearchPhoto';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/search/:name',
      name: 'SearchPhoto',
      props: true,
      component: SearchPhoto
    }
  ],
  mode: 'history'
})