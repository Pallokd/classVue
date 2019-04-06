import Vue from 'vue';
import App from './App.vue';
import './lib/mui/css/mui.css'
import {
    Header
} from 'mint-ui';

Vue.component(Header.name, Header);
const vm = new Vue({

    render: h => h(App)
}).$mount('#app')