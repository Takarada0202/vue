import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './page/HomePage.vue'
import About from './page/AboutPage.vue'
import Board from './page/BoardPage.vue'
import Contac from './page/ContactPage.vue'
import DetailPage from './page/DetailPage'
import axios from 'axios'
import Getdata from './page/GetdataPage.vue'

const routes = [
    { name: 'hoem', path: '/', component: Home },
    { name: 'about', path: '/about', component: About },
    { name: 'board', path: '/board', component: Board },
    { name: 'detail', path: '/board/show?', component: DetailPage },
    { name: 'contact', path: '/contac', component: Contac },
    { name: 'getdata', path: '/getdata', component: Getdata },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



const app = createApp(App)
app.use(router)


app.mount('#app')

app.config.globalProperties.$axios = axios;

app.config.globalProperties.$BoardContents = [
    {

    },
    {
        title: 'test1',
        description: 'test1'
    },
    {
        title: 'test2',
        description: 'descriptiontest2'
    },
    {
        title: 'test3',
        description: 'descriptiontest3'
    },
    {
        title: 'test4',
        description: 'descriptiontest4'
    },
]

// this.$router.params
//this.varname load variable