import Vue from 'vue'
import Vuex from 'vuex'
import vuexMutations from 'vuex-mutations';
Vue.use(Vuex)

export default new Vuex.Store(
  vuexMutations({
    state: {
      user: null,
    },
  })
);