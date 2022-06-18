import { createApp, onMounted } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
import "./registerServiceWorker";

import CodeEditor from "@/plugins/simple-code-editor.vue";
import componentCodeConvert from "./components/codeConvert.vue";
import newComponentCodeConvert from "./components/NewCodeConvert.vue";
import Diif_Code from "./components/Diff-Code.vue";

// @ts-ignore
import { Accordion } from "@/assets/animate.ts";

createApp(App)
  .use(store, key)
  .use(router)
  .directive("Accordion", {
    mounted: (el: HTMLElement) => {
      new Accordion(el);
    },
  })
  .component("CodeEditor", CodeEditor)
  .component("code-convert", componentCodeConvert)
  .component("code-new", newComponentCodeConvert)
  .component("diff-code", Diif_Code)
  .mount("#app");

// pwa
// vue add pwa >> registerServiceWorker.ts 파일만들어지고 main.ts에 import됌
// public 폴더 >> mainfest.json 설정 파일 만들기
