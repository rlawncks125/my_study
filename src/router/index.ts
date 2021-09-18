import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/vue",
    name: "vue",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VUE-views/Vue.vue"),
  },
  {
    path: "/HTML",
    name: "HTML",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HTML-views/HTML.vue"),
  },
  {
    path: "/CSS",
    name: "CSS",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CSS-views/CSS.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // github Page 새로고침 404페이지 해결하려면 Hash사용
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
