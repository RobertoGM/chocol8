import { createApp } from "vue";
import App from "./core/containers/App.vue";
import router from "./core/router";

createApp(App).use(router).mount("#app");
