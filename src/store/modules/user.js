import axios from "axios"

export default {
  namespaced: true,
  state: {
    // State user
    user: {
      user: null,
      token: null
    }
  },
  getters: {
    // Get the state of the user
    AUTHUSER: (state) => {
      return state.user || null
    },
    // Check the status of the user
    ISAUTHENTICATED: (state) => {
      return !!state.user
    }
  },
  actions: {
    register: (context, newUser) => {
      return axios.post("/user/register", newUser)
    },
    login: ({ commit }, user) => {
      return axios.post("/user/login", user).then(res => {
        console.log("GET Response")
        const user = {
          user: res.data.object,
          token: res.data.token
        }
        console.log(user)
        // Launch SETAUTHUSER mutation
        commit("SETAUTHUSER", user)
      })
    }
  },
  mutations: {
    // Mutation of the user when logged in
    SETAUTHUSER: (state, user) => {
      state.user = user
      return user
    }
  }
}
