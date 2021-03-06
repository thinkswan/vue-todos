import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      pageTitle: "Home"
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      pageTitle: "About"
    }
  },
  {
    path: "*",
    component: NotFound,
    meta: {
      pageTitle: "404 Not Found"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

// Update page title when switching routes
router.afterEach(to => {
  document.title = to.meta.pageTitle + " | vue-todos";
});

export default router;
