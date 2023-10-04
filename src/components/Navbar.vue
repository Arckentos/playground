<template>
    <nav class="flex items-end px-8 py-4 bg-white">
        <h2 class="font-sans text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-300">Playground</h2>
        <ul class="flex items-center justify-start gap-8 ml-12">
            <li class="font-sans text-lg font-normal transition-colors transform hover:text-gray-700 delay-0" :class="[(route.name == 'Accueil') ? 'text-gray-700' : 'text-gray-500']">
                <router-link :to="{ name: 'Accueil' }">Accueil</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>