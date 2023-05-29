import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "https://portfoliovtwo.herokuapp.com/" : "/";

Vue.config.productionTip = false;
Vue.prototype.$apiHostname = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : '/';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
