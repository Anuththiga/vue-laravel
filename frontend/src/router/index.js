import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import ContactList from "../components/ContactList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contacts",
    name: "Contact",
    component: ContactList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;