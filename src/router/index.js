import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../pages/HomeView.vue'
import Men from '../pages/MenView.vue'
import Women from '../pages/WomenView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/men', component: Men },
  { path: '/women', component: Women },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router