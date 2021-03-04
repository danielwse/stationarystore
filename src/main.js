import Vue from 'vue'
import App from './App.vue'
//Register globally
//import CustomButton from './components/CustomButton'

//Register globally
//Vue.component('custBtn',CustomButton)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
