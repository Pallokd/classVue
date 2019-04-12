import Vue from "vue";
import App from "./App.vue";
import router from './router.js'
import vueResource from 'vue-resource'
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";
import {
    Header
} from "mint-ui";
Vue.use(vueResource)
Vue.component(Header.name, Header);
const vm = new Vue({
    render: h => h(App),
    router
}).$mount("#app");