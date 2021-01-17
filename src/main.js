// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Mock from './mock.js'
import Vue from 'vue'
import App from './App'
import router from './router'

// import 'ant-design-vue/dist/antd.css';
// import Antd from 'ant-design-vue'
// Vue.use(Antd);
import { Menu, Layout, Statistic, Card, Row, Col, Divider } from 'ant-design-vue';
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Statistic);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Divider);



Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
