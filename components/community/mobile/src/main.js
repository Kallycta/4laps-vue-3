import { createApp } from 'vue'
import App from './App.vue'

import "@/styles/style.css"
import 'vue3-carousel/dist/carousel.css';
import {createRouter, createWebHistory} from "vue-router";
import PageMain from "@/components/PageMain.vue";
import PageCommunity from "@/components/PageCommunity.vue";
import PageBreed from "@/components/PageBreed.vue";
import PageArticles from "@/components/PageArticles.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/services/community/', name: 'PageMain', component: PageMain },
        { path: '/services/community/about-animal/:id', name: 'secondPage', component: PageCommunity },
        { path: '/services/community/about-breed/:id', name: 'BreedPage', component: PageBreed },
        { path: '/services/community/articles-and-video/:id', name: 'ArticlesPage', component: PageArticles },
    ],
})

const app = createApp(App)
app.use(router)

app.mount('#app')

