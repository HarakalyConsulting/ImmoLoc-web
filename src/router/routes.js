const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/Owner',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Owner.vue') }]
  },
  {
    path: '/Lodger',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Lodger.vue') }]
  },
  {
    path: '/:user/Login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/login.vue') }]
  },
  {
    path: '/:user/Register',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/register.vue') }]
  },

  // Always leave this as last one
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
