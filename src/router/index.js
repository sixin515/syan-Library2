import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import FirebaseSigninView from '@/views/FirebaseSigninView.vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';
import { useAuth } from './authenticate';
import AddBookView from '@/views/AddBookView.vue';
import GetBookCountView from '../views/GetBookCountView.vue';
import WeatherView from '../views/WeatherView.vue';
import CountBookAPI from '../views/CountBookAPI.vue';

const { isAuthenticated } = useAuth();

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true } // 添加 meta 信息来标记需要身份验证的路由
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView,
    meta: { requiresAuth: true } // 添加 meta 信息来标记需要身份验证的路由
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // 检查目标路由是否需要身份验证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthenticated.value) {
      console.log("indexjs-login success", isAuthenticated.value);
      next();
    } else {
      console.log("indexjs-need login", isAuthenticated.value);
      next({ name: 'Login' }); // 如果未认证，重定向到登录页
    }
  } else {
    next(); // 不需要身份验证的路由
  }
});

export default router;
