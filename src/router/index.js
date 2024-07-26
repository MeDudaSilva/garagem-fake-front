import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LayoutLarge from '@/layouts/LayoutLarge.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutLarge,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: "/categorias",
          name: "categorias",
          component: () => import('@/views/CategoriaView.vue'),
        },
        {
          path: "/marcas",
          name: "marcas",
          component: () => import('@/views/MarcaView.vue'),
        },
        {
          path: "/acessorios",
          name: "acessorios",
          component: () => import('@/views/AcessorioView.vue'),
        },
        {
          path: "/cores",
          name: "cores",
          component: () => import('@/views/CorView.vue'),
        },
      ],
    },
  ],
});

export default router;