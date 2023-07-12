import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../pages/HomeView.vue'
import Men from '../pages/MenView.vue'
import Women from '../pages/WomenView.vue'
import Kids from '../pages/Kids.vue'
import Accessories from '../pages/Accessories.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/men', component: Men },
  { path: '/women', component: Women },
  { path: '/kids', component: Kids },
  { path: '/accessories', component: Accessories },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router