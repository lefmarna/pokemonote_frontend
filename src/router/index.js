import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/calc-stats",
    name: "ステータス計算機",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "calc-stats" */ "../views/CalcStats.vue")
  },
  {
    path: "/calc-speed",
    name: "素早さ計算機",
    component: () => import("../views/CalcSpeed.vue")
  },
  {
    path: "/privacy-policy",
    name: "利用規約",
    component: () => import("../views/privacyPolicy")
  },
  {
    path: "/sitemap.xml",
    name: "XMLサイトマップ"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
