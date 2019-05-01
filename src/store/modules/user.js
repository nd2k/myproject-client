import axios from "axios"

export default {
  namespaced: true,
  state: {},
  actions: {
    register(context, newUser) {
      return axios.post("/user/register", newUser)
    },
    login(context, user) {
      return axios.post("/user/login", user).then(response => {
        console.log("GET Response")
        console.log(response.data)
      })
    }
  }
}
