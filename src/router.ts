import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/pages/Demo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
