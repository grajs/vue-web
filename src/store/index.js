import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    loginIn(state, {token, expires}) {
      state.token = token
      if (document) {
        if (expires) {
          const time = new Date()
          time.setTime(time.getTime() + expires)
          document.cookie = `token=${token};expires=${time.toUTCString()}`
        } else {
          document.cookie = `token=${token}`
        }
      }
    },
    loginOut(state) {
      state.token = null
      if (document) {
        const time = new Date()
        time.setTime(time.getTime() - 1)
        document.cookie = `token='';expires=${time.toUTCString()}`
        location.href = '/#/login'
      }
    }
  }
})