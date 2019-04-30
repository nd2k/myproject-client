import Vue from "vue"
import Vuex from "vuex"

import user from "./modules/user"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  debug: true,
  // In store, we are keeping our data we are sharing with components
  state: {},
  // Getters are like computed properties. Simple functions to get the state
  getters: {},
  // Actions are like method in a vue component. They should not mutate the state.
  // Good place to fetch data. Action calls usualy should resolve Promise into data.
  actions: {},
  // Mutations are simple functions to mutate the state.
  mutations: {}
})
