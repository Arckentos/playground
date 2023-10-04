import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './views/Accueil.vue';
import FacebookTranslucent from './views/FacebookTranslucent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Accueil,
            name: 'Accueil',
        },
    ],
});

export default router;