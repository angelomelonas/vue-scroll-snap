import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "fullscreenvertical",
      component: () => import("./components/FullscreenVertical.vue")
    },
    {
      path: "/fullscreenhorizontal",
      name: "fullscreenhorizontal",
      component: () => import("./components/FullscreenHorizontal.vue")
    },
    {
      path: "/vertical",
      name: "vertical",
      component: () => import("./components/Vertical.vue")
    },
    {
      path: "/horizontal",
      name: "horizontal",
      component: () => import("./components/Horizontal.vue")
    }
  ]
});
