import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExpMore from "../components/ExpMore.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    //{
    //   path: "/work",
    //   name: "work",
    //   component: () => import("../views/WorkView.vue"),
    //},
    {
      path: "/experience/",
      name: "experience",
      component: () => import("../views/EduView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/code",
      name: "code",
      component: () => import("../views/CodeView.vue"),
    },
    {
      path: "/exp/:more/",
      name: "exp",
      component: () => import("../views/ExperienceView.vue"),
    },
  ],
});

export default router;
