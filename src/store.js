import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      userid: 'abc',
      otherInfo: 'def',
    },
  },
  mutations: {
    logout (state) {
      state.user.userid = ''
      state.user.otherInfo = ''
    },
  },
  actions: {
    logout ({commit}) {
      commit('logout')
    },
  }
})
