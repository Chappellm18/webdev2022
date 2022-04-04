import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import share from '../views/share.vue'
import mission from '../views/mission.vue'
import shelterLocator from '../views/shelterLocator.vue'
import profile from '../views/profile.vue'
import createPost from '../views/createPost.vue'

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/login', name: 'login', component: login },
  { path: '/signup', name: 'signup', component: signup },
  { path: '/share', name: 'share', component: share },
  { path: '/mission', name: 'mission', component: mission },
  { path: '/shelterLocator', name: 'shelterLocator', component: shelterLocator },
  { path: '/profile', name: 'profile', component: profile },
  { path: '/createPost', name: 'createPost', component: createPost },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
