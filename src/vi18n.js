import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './message'

Vue.use(VueI18n)

var i18n = new VueI18n({
  locale: 'zh', // set locale
  messages, // set locale messages
})

export default i18n
