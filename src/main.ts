import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

createApp(App).use(store).use(router).mount("#app");

// pwa
// vue add pwa >> registerServiceWorker.ts 파일만들어지고 main.ts에 import됌
// public 폴더 >> mainfest.json 설정 파일 만들기
