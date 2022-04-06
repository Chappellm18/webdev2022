import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import share from '../views/share.vue'
import mission from '../views/mission.vue'
import shelterLocator from '../views/shelterLocator.vue'
import profile from '../views/profile.vue'
import createPost from '../views/createPost.vue'

import Session from '../services/session'

const routes = [
  { path: '/', name: 'home', component: home, meta: { requiresLogin: false } },
  { path: '/login', name: 'login', component: login, meta: { requiresLogin: false } },
  { path: '/signup', name: 'signup', component: signup, meta: { requiresLogin: false } },
  { path: '/share', name: 'share', component: share, meta: { requiresLogin: true } },
  { path: '/mission', name: 'mission', component: mission, meta: { requiresLogin: false } },
  { path: '/shelterLocator', name: 'shelterLocator', component: shelterLocator, meta: { requiresLogin: false } },
  { path: '/profile', name: 'profile', component: profile, meta: { requiresLogin: true } },
  { path: '/createPost', name: 'createPost', component: createPost, meta: { requiresLogin: true } },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && Session.user == null) {
    next('/login')
  } else {
    next()
  }
})

export default router;
