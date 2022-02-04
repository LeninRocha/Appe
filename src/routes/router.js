import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from "../pages/Home"
import Galeria from "../pages/Galeria"
import User from "../pages/User"
import Sobre from "../pages/Sobre"

const routes =[
    {
        path: "/",
        component: Home,
    },
    {
        path: "/galeria",
        component: Galeria,
    },
    {
        path: "/user/:id",
        component: User,
    },
    {
        path: "/sobre",
        component: Sobre,
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router