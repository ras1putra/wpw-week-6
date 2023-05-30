import { createWebHistory, createRouter } from "vue-router";
import Dashboard from '../components/Dashboard.vue'
import About from '../components/About.vue'
import Management from '../components/Management.vue'
import ManagementActive from '../components/ManagementActive.vue'
import ManagementExit from '../components/ManagementExit.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'


const routes = [

    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/signup",
        name: "signup",
        component: Signup
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/management",
        component: Management,
        children: [
            {
                path: "active",
                component: ManagementActive,
                name: "management.active",
            },
            {
                path: "exit",
                component: ManagementExit,
                name: "management.exit",
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
