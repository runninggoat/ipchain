import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: 'zh',
    user: {
      userid: '',
    },
  },
  mutations: {
    logout (state) {
      state.user.userid = ''
    },
    loadState (state) {
      let l = localStorage.getItem('locale')
      if (l === undefined || l === null || l === 'null') l = 'zh'
      state.locale = l
      let user = localStorage.getItem('user')
      try {
        if (user !== undefined && user !== null && user !== 'null') {
          state.user = JSON.parse(user)
        }
      } catch (e) {
        // default state
        state.user = {
          locale: 'zh',
          user: {
            userid: '',
          },
        }
      }
      localStorage.setItem('locale', null)
      localStorage.setItem('user', null)
    },
    persistState (state) {
      localStorage.setItem('locale', state.locale)
      localStorage.setItem('user', JSON.stringify(state.user))
    },
  },
  actions: {
    logout ({commit}) {
      commit('logout')
    },
    loadState ({commit}) {
      commit('loadState')
    },
    persistState ({commit}) {
      commit('persistState')
    },
  }
})
