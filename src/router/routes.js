const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/Owner',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Owner/Profile.vue') }]
  },
  {
    path: '/Lodger',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Lodger/Profile.vue') }]
  },
  {
    path: '/:usertype/Login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/login.vue') }]
  },
  {
    path: '/:usertype/Register',
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
