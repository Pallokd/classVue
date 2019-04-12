import Vue from "vue";
import VueRouter from "vue-router";
import home from "./coms/home.vue";
import search from "./coms/search.vue";
import shopcar from "./coms/shopcar.vue";
import vip from "./coms/vip.vue";
Vue.use(VueRouter);
var router = new VueRouter({
    routes: [{
            path: "/",
            redirect: "/home"
        }, {
            path: "/home",
            component: home
        },
        {
            path: "/shopcar",
            component: shopcar
        },
        {
            path: "/vip",
            component: vip
        },
        {
            path: "/search",
            component: search
        }
    ],
    linkActiveClass: "mui-active"
});


export default router;