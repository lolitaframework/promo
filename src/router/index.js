import Vue from 'vue';
import Router from 'vue-router';
import AddStore from './AddStore';
import Login from './Login';
import Welcome from './Welcome';
import Wizard from './Wizard';
import Page404 from './Page404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
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
    {
      path: '/wizard',
      name: 'Wizard',
      component: Wizard,
    },
    {
      path: '*',
      component: Page404,
    },
  ],
});
