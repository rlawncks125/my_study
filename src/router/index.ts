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
      import(/* webpackChunkName: "Vue" */ "../views/VUE-views/Vue.vue"),
  },
  {
    path: "/HTML",
    name: "HTML",
    component: () =>
      import(/* webpackChunkName: "HTML" */ "../views/HTML-views/HTML.vue"),
  },
  {
    path: "/기본구조",
    name: "기본구조",
    component: () =>
      import(/* webpackChunkName: "HTML" */ "../views/HTML-views/기본구조.vue"),
  },
  {
    path: "/HTML_텍스트관련",
    name: "텍스트관련",
    component: () =>
      import(
        /* webpackChunkName: "HTML" */ "../views/HTML-views/텍스트관련.vue"
      ),
  },
  {
    path: "/HTML_목록관련",
    name: "목록관련",
    component: () =>
      import(/* webpackChunkName: "HTML" */ "../views/HTML-views/목록관련.vue"),
  },
  {
    path: "/HTML_링크_이미지_관련",
    name: "링크_이미지_관련",
    component: () =>
      import(
        /* webpackChunkName: "HTML" */ "../views/HTML-views/링크_이미지_관련.vue"
      ),
  },
  {
    path: "/HTML_테이블관련",
    name: "테이블관련",
    component: () =>
      import(
        /* webpackChunkName: "HTML" */ "../views/HTML-views/테이블관련.vue"
      ),
  },
  {
    path: "/HTML_폼관련",
    name: "폼관련",
    component: () =>
      import(/* webpackChunkName: "HTML" */ "../views/HTML-views/폼관련.vue"),
  },
  {
    path: "/HTML_멀티미디어관련",
    name: "멀티미디어관련",
    component: () =>
      import(
        /* webpackChunkName: "HTML" */ "../views/HTML-views/멀티미디어관련.vue"
      ),
  },
  {
    path: "/시멘틱태그",
    name: "시멘틱태그",
    component: () =>
      import(
        /* webpackChunkName: "HTML" */ "../views/HTML-views/시멘틱_태그.vue"
      ),
  },
  {
    path: "/CSS",
    name: "CSS",
    component: () =>
      import(/* webpackChunkName: "CSS" */ "../views/CSS-views/CSS.vue"),
  },
  {
    path: "/CSS선택자",
    name: "CSS선택자",
    component: () =>
      import(/* webpackChunkName: "CSS" */ "../views/CSS-views/CSS선택자.vue"),
  },
  {
    // 다른 경로로 접근하면 / 주소로 리다이렉트
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
