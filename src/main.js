import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import Calculator from './components/Calculator'
import Basecard from './components/UI/Basecard'

Vue.config.productionTip = false
Vue.component('calculator-container', Calculator)
Vue.component('card-container', Basecard)

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
