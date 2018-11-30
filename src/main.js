import Vue from 'vue'
import App from '@/App.vue'
// import router from '@/router'
// import store from './store'
import axios from 'axios'
import Bunny from './lib/Bunny'

Vue.prototype.$http = axios
Vue.config.productionTip = false
const app = new Bunny()

app.bootstrap('#app', App)
