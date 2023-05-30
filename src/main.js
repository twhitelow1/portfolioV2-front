import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "https://portfoliovtwo.herokuapp.com/api" : "https://portfoliovtwo.herokuapp.com/api";

Vue.config.productionTip = false;
Vue.prototype.$apiHostname = process.env.NODE_ENV === 'development' ? '' : '';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
