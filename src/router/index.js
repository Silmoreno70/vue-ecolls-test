import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../layouts/Home.vue';
import Login from '../layouts/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('api_token')) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('api_token')) {
      next('/home');
      return;
    }
    next();
  } else {
    next();
  }
});

export default router
