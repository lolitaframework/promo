import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import AddStore from './AddStore';
import Login from './Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/add-store',
      name: 'Add store',
      component: AddStore,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
