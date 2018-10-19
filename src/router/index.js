import Vue from "vue"
import Router from "vue-router"
import Index from "@/templates/Index"
import NotFound from "@/templates/NotFound"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
    },
  ],
})

// https://bootstrap-vue.js.org/docs
import BootstrapVue from "bootstrap-vue"

Vue.use(BootstrapVue)

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
