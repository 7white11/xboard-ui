import axios from 'axios'

const api = axios.create({
  baseURL: '/api/v1',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

// Auth interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('xboard_token')
  if (token) config.headers.Authorization = token
  return config
})

api.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('xboard_token')
      window.location.href = '/login'
    }
    return Promise.reject(err.response?.data || err)
  }
)

// Auth
export const authAPI = {
  login: (data: { email: string; password: string }) => api.post('/passport/auth/login', data),
  register: (data: { email: string; password: string; invite_code?: string; email_code?: string }) => api.post('/passport/auth/register', data),
  forgot: (email: string) => api.post('/passport/auth/forget', { email }),
  quickLogin: () => api.post('/passport/auth/getQuickLoginUrl'),
}

// User
export const userAPI = {
  getInfo: () => api.get('/user/info'),
  getSubscribe: () => api.get('/user/getSubscribe'),
  getStat: () => api.get('/user/getStat'),
  update: (data: Record<string, unknown>) => api.post('/user/update', data),
  changePassword: (data: { old_password: string; new_password: string }) => api.post('/user/changePassword', data),
  resetSecurity: () => api.get('/user/resetSecurity'),
}

// Plans
export const planAPI = {
  fetch: () => api.get('/plan/fetch'),
}

// Orders
export const orderAPI = {
  fetch: (params?: { page?: number; page_size?: number }) => api.get('/order/fetch', { params }),
  save: (data: Record<string, unknown>) => api.post('/order/save', data),
  checkout: (trade_no: string) => api.post('/order/checkout', { trade_no }),
  check: (trade_no: string) => api.get('/order/check', { params: { trade_no } }),
  detail: (trade_no: string) => api.get('/order/detail', { params: { trade_no } }),
  cancel: (trade_no: string) => api.post('/order/cancel', { trade_no }),
  getPaymentMethods: () => api.get('/order/getPaymentMethod'),
}

// Tickets
export const ticketAPI = {
  fetch: () => api.get('/ticket/fetch'),
  save: (data: { subject: string; message: string; level: number }) => api.post('/ticket/save', data),
  reply: (data: { id: number; message: string }) => api.post('/ticket/reply', data),
  close: (id: number) => api.post('/ticket/close', { id }),
}

// Servers
export const serverAPI = {
  fetch: () => api.get('/server/fetch'),
}

// Notices
export const noticeAPI = {
  fetch: () => api.get('/notice/fetch'),
}

// Invites
export const inviteAPI = {
  fetch: () => api.get('/invite/fetch'),
  save: () => api.get('/invite/save'),
}

// Traffic
export const trafficAPI = {
  getLog: (params?: { page?: number }) => api.get('/stat/getTrafficLog', { params }),
}

// Site config (public)
export const configAPI = {
  get: () => api.get('/comm/config'),
}

export default api
