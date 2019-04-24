const load = name => () => import(`../views/${name}.vue`)

export default [
  {
    name: 'index',
    path: '/',
    component: load('index'),
    meta: { title: '首页' }
  },
  {
    name: 'login',
    path: '/login',
    component: load('login'),
    meta: { title: 'login' }
  }
]
