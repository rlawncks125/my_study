import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

createApp(App).use(store).use(router).mount("#app");

// pwa
// vue add pwa
// public 폴더 >> mainfest.json 설정 파일일 만들기
