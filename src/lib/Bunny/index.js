import Vue from 'vue'
import router from '@/router'

class Bunny {
  constructor (options = {}) {
    this.options = options
  }
  init (el = '#app', App) {
    new Vue({
      ...this.options,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
  plugin (plugin) {
    Vue.use(plugin)
  }
  bootstrap (el, App) {
    this.init(el, App)
  }
}

export default Bunny
