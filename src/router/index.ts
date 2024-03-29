import {
  createRouter,
  RouteRecordRaw,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
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
    path: "/vue/:id",
    name: "vueId",
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
    path: "/HTML_Dialog",
    name: "Dialog",
    component: () =>
      import(/* webpackChunkName: "HTML" */ "../views/HTML-views/Dialog.vue"),
  },
  {
    path: "/시멘틱태그",
    name: "시멘틱태그",
    component: () =>
      import(
        /* webpackChunkName: "시멘틱" */ "../views/HTML-views/시멘틱_태그.vue"
      ),
  },
  {
    path: "/CSS",
    name: "CSS",
    component: () =>
      import(/* webpackChunkName: "CSS" */ "../views/CSS-views/CSS.vue"),
    children: [
      {
        path: "root의사클래스",
        name: "root의사클래스",
        component: () => import("../views/CSS-views/root의사클래스.vue"),
      },
      {
        path: "css함수",
        name: "css함수",
        component: () => import("../views/CSS-views/CSS함수.vue"),
      },
      {
        path: "CSS선택자",
        name: "CSS선택자",
        component: () =>
          import(
            /* webpackChunkName: "CSS" */ "../views/CSS-views/CSS선택자.vue"
          ),
      },
    ],
  },
  {
    path: "/media쿼리",
    name: "media쿼리",
    component: () => import("../views/SCSS-views/media쿼리.vue"),
  },
  {
    path: "/SCSS데이터",
    name: "SCSS데이터",
    component: () => import("../views/SCSS-views/데이터.vue"),
  },
  {
    path: "/중첩",
    name: "중첩",
    component: () => import("../views/SCSS-views/중첩.vue"),
  },
  {
    path: "/라이브러리",
    name: "라이브러리",
    component: () => import("../views/SCSS-views/라이브러리.vue"),
  },
  {
    path: "/Mixins",
    name: "Mixins",
    component: () => import("../views/SCSS-views/Mixins.vue"),
  },
  {
    path: "/Extend",
    name: "Extend",
    component: () => import("../views/SCSS-views/Extend.vue"),
  },
  {
    path: "/Function",
    name: "Function",
    component: () => import("../views/SCSS-views/Function.vue"),
  },
  {
    path: "/조건문_반복문",
    name: "조건문_반복문",
    component: () => import("../views/SCSS-views/조건문_반복문.vue"),
  },
  {
    path: "/SCSS_내장함수",
    name: "SCSS_내장함수",
    component: () => import("../views/SCSS-views/내장함수.vue"),
  },
  {
    path: "/classStyle",
    name: "classStyle",
    component: () => import("../views/VUE-views/Class_Style_바인딩.vue"),
  },
  {
    path: "/템플릿_문법",
    name: "템플릿_문법",
    component: () => import("../views/VUE-views/템플릿_문법.vue"),
  },
  {
    path: "/DOM접근",
    name: "DOM접근",
    component: () => import("../views/VUE-views/DOM접근.vue"),
  },
  {
    path: "/vuex/모듈정의",
    name: "모듈정의s",
    component: () => import("@/views/VUEX-view/모듈정의.vue"),
  },
  {
    path: "/vuex/파일구조",
    name: "파일구조",
    component: () => import("@/views/VUEX-view/파일구조.vue"),
  },
  {
    path: "/vuex/파일정리",
    name: "파일정리",
    component: () => import("@/views/VUEX-view/파일정리.vue"),
  },
  {
    path: "/vuex/선언",
    name: "선언",
    component: () => import("@/views/VUEX-view/선언.vue"),
  },
  {
    path: "/vuex/Typescript",
    name: "타입스크립트",
    component: () => import("@/views/VUEX-view/Typescript.vue"),
  },
  {
    path: "/vuex/Typescript2",
    name: "타입스크립트2",
    component: () => import("@/views/VUEX-view/Typescript2.vue"),
  },
  {
    path: "/함수_Promise_리턴값",
    name: "함수_Promise_리턴값",
    component: () => import("@/views/기타/함수_Promise_리턴값.vue"),
  },
  {
    path: "/cs기술면접",
    name: "cs기술면접",
    component: () => import("@/views/CS기술면접/main.vue"),
    children: [
      {
        path: "test",
        name: "cs기술면접 테스트",
        component: () => import("@/views/CS기술면접/test.vue"),
      },
      {
        path: "link",
        name: "cs기술면접 link",
        component: () => import("@/views/CS기술면접/link.vue"),
      },
      {
        path: "think",
        name: "개발 상식",
        component: () => import("@/views/CS기술면접/개발상식.vue"),
      },
      {
        path: "network",
        name: "네트워크",
        component: () => import("@/views/CS기술면접/네트워크.vue"),
      },
      {
        path: "운영체재",
        name: "운영체재",
        component: () => import("@/views/CS기술면접/운영체재.vue"),
      },
    ],
  },
  {
    path: "/CSS디자인",
    name: "/CSS디자인",
    component: () =>
      import(/* webpackChunkName: "css디자인" */ "@/views/CSS디자인/main.vue"),
    children: [
      {
        path: "text",
        component: () =>
          import(
            /* webpackChunkName: "css디자인" */ "@/views/CSS디자인/text.vue"
          ),
      },
      {
        path: "image",
        component: () =>
          import(
            /* webpackChunkName: "css디자인" */ "@/views/CSS디자인/image.vue"
          ),
      },
      {
        path: "details-summary",
        component: () =>
          import(
            /* webpackChunkName: "css디자인" */ "@/views/CSS디자인/details-summary.vue"
          ),
      },
    ],
  },
  {
    path: "/markdown",
    name: "markdown",
    component: () =>
      import(/* webpackChunkName: "markdown" */ "@/views/markdown/main.vue"),
    children: [
      {
        path: "README",
        component: () =>
          import(
            /* webpackChunkName: "markdown" */ "@/views/markdown/render.vue"
          ),
        meta: {
          page: "README",
        },
      },
      {
        path: "글자",
        component: () =>
          import(
            /* webpackChunkName: "markdown" */ "@/views/markdown/render.vue"
          ),
        meta: {
          page: "글자",
        },
      },
      {
        path: "링크_줄바꿈",
        component: () =>
          import(
            /* webpackChunkName: "markdown" */ "@/views/markdown/render.vue"
          ),
        meta: {
          page: "링크_줄바꿈",
        },
      },
      {
        path: "선_강조",
        component: () =>
          import(
            /* webpackChunkName: "markdown" */ "@/views/markdown/render.vue"
          ),
        meta: {
          page: "선_강조",
        },
      },
      {
        path: "이미지",
        component: () =>
          import(
            /* webpackChunkName: "markdown" */ "@/views/markdown/render.vue"
          ),
        meta: {
          page: "이미지",
        },
      },
      {
        path: "인용글_목록",
        component: () =>
          import(
            /* webpackChunkName: "markdown" */ "@/views/markdown/render.vue"
          ),
        meta: {
          page: "인용글_목록",
        },
      },
      {
        path: "코드",
        component: () =>
          import(
            /* webpackChunkName: "markdown" */ "@/views/markdown/render.vue"
          ),
        meta: {
          page: "코드",
        },
      },
    ],
  },
  {
    path: "/regexp",
    component: () => import("@/views/정규식/regexp.vue"),
  },
  {
    path: "/regexp/example",
    component: () => import("@/views/정규식/예제_테스트.vue"),
  },
  {
    path: "/anima",
    component: () => import("@/views/애니메이션/정리전.vue"),
  },
  {
    path: "/anima/input",
    component: () => import("@/views/애니메이션/input-animation.vue"),
  },
  {
    path: "/anima/bgHidden",
    component: () => import("@/views/애니메이션/BgHideEffect.vue"),
  },
  {
    path: "/scss_container",
    component: () => import("@/views/SCSS-views/container.vue"),
  },
  {
    path: "/opener",
    component: () => import("@/views/기타/opener.vue"),
  },
  {
    path: "/opener_popup",
    component: () => import("@/views/기타/opener_popup.vue"),
  },
  {
    path: "/임시",
    component: () => import("@/views/임시.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  // github Page 새로고침 404페이지 오류 해결
  // createWebHashHistory() 함수사용 hash mode
  // hash 단점
  // 웹접근성 건너뛰기 링크에 걸림 , URL /#/ 추가됨
  // history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

declare module "vue-router" {
  interface RouteMeta {
    page?: string;
  }
}
