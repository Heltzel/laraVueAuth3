import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

require("./store/subscriber");

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

Vue.config.productionTip = false;

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = function (msg, vm, trace) {
  trace 
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
}
store.dispatch("auth/attempt", localStorage.getItem("token"))
 new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");

// store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
//   new Vue({
//     router,
//     store,
//     vuetify,
//     render: (h) => h(App),
//   }).$mount("#app");
// });
