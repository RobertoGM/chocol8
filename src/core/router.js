import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../app/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import("../app/editor/Editor.vue"),
  },
  {
    path: "/preview",
    name: "Preview",
    component: () => import("../app/preview/Preview.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
