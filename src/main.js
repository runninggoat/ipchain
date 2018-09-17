import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './vi18n'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
