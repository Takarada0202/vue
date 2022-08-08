import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './page/HomePage.vue'
import About from './page/AboutPage.vue'
import Board from './page/BoardPage.vue'
import Contac from './page/ContacPage.vue'
import DetailPage from './page/DetailPage'



const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/board', component: Board },
    { path: '/board/show', component: DetailPage },
    { path: '/contac', component: Contac },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



const app = createApp(App)
app.use(router)


app.mount('#app')
