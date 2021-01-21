// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Mock from './mock.js'
import Vue from 'vue'
import App from './App'
import router from './router'

// import 'ant-design-vue/dist/antd.css';
// import Antd from 'ant-design-vue'
// Vue.use(Antd);
import {
  Menu, Layout, Statistic, Card, Row, Col, Divider, Table, Tag, Button, Space, Modal, DatePicker, FormModel,
  Input, Radio, ConfigProvider, InputNumber, message
} from 'ant-design-vue';
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Statistic);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Divider);
Vue.use(Table);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Space);
Vue.use(Modal);
Vue.use(DatePicker);
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Radio);
Vue.use(ConfigProvider);
Vue.use(InputNumber);
Vue.use(message);

Vue.prototype.$message = message;
message.config({
  duration: 2,
});

import moment from 'moment';
import 'moment/locale/zh-cn'
moment.locale('zh-cn');


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



Date.prototype.format = function (format) {
  /*
   * eg:format="YYYY-MM-dd hh:mm:ss";
   */
  var o = {
    "M+": this.getMonth() + 1, // month
    "d+": this.getDate(), // day
    "h+": this.getHours(), // hour
    "m+": this.getMinutes(), // minute
    "s+": this.getSeconds(), // second
    "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
    "S": this.getMilliseconds()
    // millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "")
      .substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
        : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}