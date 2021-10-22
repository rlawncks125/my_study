import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
import "./registerServiceWorker";

import componentCodeConvert from "./components/codeConvert.vue";
import Diif_Code from "./components/Diff-Code.vue";

createApp(App)
  .use(store, key)
  .use(router)
  .component("code-convert", componentCodeConvert)
  .component("diff-code", Diif_Code)
  .mount("#app");

// pwa
// vue add pwa >> registerServiceWorker.ts 파일만들어지고 main.ts에 import됌
// public 폴더 >> mainfest.json 설정 파일 만들기
