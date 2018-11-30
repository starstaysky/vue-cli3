import Vue from 'vue'
import App from '@/App.vue'
// import router from '@/router'
// import store from './store'
import axios from 'axios'
import Bunny from './lib/Bunny'
import elementui from 'element-ui'

Vue.prototype.$http = axios
Vue.config.productionTip = false
const app = new Bunny()
app.plugin(elementui)
app.bootstrap('#app', App)
