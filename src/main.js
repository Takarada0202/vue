import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './page/HomePage.vue'
import About from './page/AboutPage.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



const app = createApp(App)
app.use(router)


app.mount('#app')
