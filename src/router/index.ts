import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SnapRecordingVue from '@/views/Snap-Recording.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/start-recording',
      name: 'start-recording',
      component:SnapRecordingVue
    }
  ]
})

export default router
