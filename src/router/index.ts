import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/login', name: 'Login', component: () => import('@/views/auth/LoginView.vue'), meta: { guest: true } },
  { path: '/register', name: 'Register', component: () => import('@/views/auth/RegisterView.vue'), meta: { guest: true } },
  { path: '/dashboard', name: 'Dashboard', component: () => import('@/views/user/DashboardView.vue'), meta: { auth: true } },
  { path: '/plans', name: 'Plans', component: () => import('@/views/user/PlansView.vue'), meta: { auth: true } },
  { path: '/orders', name: 'Orders', component: () => import('@/views/user/OrdersView.vue'), meta: { auth: true } },
  { path: '/profile', name: 'Profile', component: () => import('@/views/user/ProfileView.vue'), meta: { auth: true } },
  { path: '/tickets', name: 'Tickets', component: () => import('@/views/user/TicketsView.vue'), meta: { auth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/dashboard' },
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach(async (to) => {
  const auth = useAuthStore()
  await auth.checkAuth()
  if (to.meta.auth && !auth.isLoggedIn) return '/login'
  if (to.meta.guest && auth.isLoggedIn) return '/dashboard'
})

export default router
