import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import sellers from './components/sellers/sellers.vue';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const app = Vue.extend(App);

const router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/sellers': {
    component: sellers
  }
});

router.start(app, '#app');

// router.go('/goods');
