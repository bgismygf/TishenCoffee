// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import * as VeeValidate from 'vee-validate';
import VueI18n from 'vue-i18n';
import zhTW from 'vee-validate/dist/locale/zh_TW';

import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';

axios.defaults.withCredentials = true;
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zhTW',
});
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhTW,
  },
});

Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

Vue.component('Loading', Loading);

export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/signin',
        });
      }
    });
  } else {
    next();
  }
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});
