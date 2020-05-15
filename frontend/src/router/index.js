import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";

import CalendarMain from "../views/calendar/Main"
import DocumentsMain from "../views/MyDocuments/Main"
import ReportsMain from "../views/MyReports/Main"

import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      }
      next()
    },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
{
    path: "/calendar",
    name: "Calendar",
    component: CalendarMain,
  },
{
    path: "/documents",
    name: "Documents",
    component: DocumentsMain,
  },
  {
    path: "/reports",
    name: "Reports",
    component: ReportsMain,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
