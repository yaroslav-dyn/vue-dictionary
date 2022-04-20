import Vue from "vue";
import VueRouter from "vue-router";
import DictionaryIndex from "../Dictionary/DictionaryIndex.vue";
import dayjs from "dayjs";
Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "dictionary",
        components: {
            default: DictionaryIndex
        }
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
export default router;
Vue.filter('formatDate', function (value, format) {
    if (!value)
        return '';
    return dayjs(value).format(format);
});
//# sourceMappingURL=index.js.map