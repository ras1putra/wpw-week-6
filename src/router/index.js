import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Management from '../components/Management.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About,
    }, 
    {
        path: "/management",
        name: "management",
        component: Management,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "",
});

export default router;
