// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/semantic.css';
import '@/assets/css/style.css';
import Vue from 'vue';
import 'at-ui-style';
import AtUI from 'at-ui';
import App from './App';
import router from './router';

Vue.use(AtUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
