import { createApp } from "vue";
import "@/index.css";

import App from "@/App.vue";
import router from "@/Router";
import { createPinia } from "pinia";
import addFontAwesomeIcon from "@/font-awesome";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .component("font-awesome-icon", addFontAwesomeIcon())
  .mount("#app");
