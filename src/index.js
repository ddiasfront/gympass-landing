import Vue from 'vue';
import Main from './app/Main.vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import VueAxios from 'vue-axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueScrollTo from 'vue-scrollto';

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);
Vue.use(VueScrollTo);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './index.scss';

export default new Vue({
  el: '#root',
  render: h => h(Main)
});
