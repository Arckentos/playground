<template>
    <nav class="flex items-end px-8 py-4 bg-gradient-to-r from-blue-100/80 to-violet-200">
        <h2 class="font-sans text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-300">Playground</h2>
        <ul class="flex items-center justify-start gap-8 ml-12">
            <li class="font-semibold leading-6 transition-colors transform ftext-base hover:text-gray-600 delay-0" :class="[(route.name == 'Accueil') ? 'text-gray-600' : 'text-gray-500']">
                <router-link :to="{ name: 'Accueil' }">Accueil</router-link>
            </li>
            <li class="text-base font-semibold leading-6 transition-colors transform hover:text-gray-600 delay-0" :class="[(route.name == 'FacebookTranslucent') ? 'text-gray-600' : 'text-gray-500']">
                <router-link :to="{ name: 'FacebookTranslucent' }">Facebook Translucent</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>