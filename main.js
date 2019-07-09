import Vue from 'vue'
import App from './App'
import { fetch, post } from './common/request'
// import { fetch, post } from './utils/http'

Vue.config.productionTip = false
Vue.prototype.$fetch = fetch
Vue.prototype.post = post
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
