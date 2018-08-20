// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/style.css';
import Vue from 'vue';
import 'at-ui-style/css/at.css';
import AtUI from 'at-ui';
import VueSocketio from 'vue-socket.io';
import io from 'socket.io-client';
import App from './App';
import router from './router';

Vue.use(AtUI);
Vue.config.productionTip = false;
Vue.use(VueSocketio, io('http://localhost:13665/'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  sockets: {
    connect() {
      // eslint-disable-next-line
      console.info('Socket connected');
      window.t = this;
    },
  },
});
