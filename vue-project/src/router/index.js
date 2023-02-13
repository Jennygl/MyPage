import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
    // {
    //   path: "/exp/",
    //   name: "more",
    //   component: () => import("../views/MyExperience.vue"),
    // },

    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    // {
    //   path: "/code",
    //   name: "code",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/CodeView.vue"),
    // },
  ],
});

export default router;
