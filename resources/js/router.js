import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import ContactList from './components/ContactList.vue';

const routes = [
    {
        name: '/',
        path: '/',
        component: Home
    },
    {
        name: '/contacts',
        path: '/contacts',
        component: ContactList
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router