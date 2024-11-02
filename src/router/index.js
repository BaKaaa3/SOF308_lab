// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Lab1Bai1 from '../components/lab1/bai1.vue'; // Import component
import Lab1Bai2 from '../components/lab1/bai2.vue'; // Import another component
import Lab1Bai3 from '../components/lab1/bai3.vue';
import BlogPage from '../components/Blog.vue'
// Định nghĩa các route
const routes = [
  {
    path: '/',
    name: 'Lab1Bai1',
    component: Lab1Bai1, // Kết nối với component
  },
  {
    path: '/Lab1Bai2',
    name: 'Lab1Bai2',
    component: Lab1Bai2, // Kết nối với component
  },
  {
    path: '/Lab1Bai3',
    name: 'Lab1Bai3',
    component: Lab1Bai3, // Kết nối với component
  },
  {
    path: '/BlogPage',
    name: 'BlogPage',
    component: BlogPage, // Kết nối với component
  },
];

// Tạo router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;