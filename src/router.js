import Vue from "vue";
import VueRouter from "vue-router";
import home from "./coms/tabbar/home.vue";
import search from "./coms/tabbar/search.vue";
import shopcar from "./coms/tabbar/shopcar.vue";
import vip from "./coms/tabbar/vip.vue";
import newslist from "./coms/home/newlist.vue"
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
        },
        {
            path: '/home/newslist',
            component: newslist
        }
    ],
    linkActiveClass: "mui-active"
});


export default router;