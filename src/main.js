import Vue from 'vue'
import App from './App.vue'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import VueCurrencyFilter from 'vue-currency-filter'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueCurrencyFilter, {
  symbol: 'HK$',
  thousandsSeparator: ',',
  fractionCount: 0,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: true
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')