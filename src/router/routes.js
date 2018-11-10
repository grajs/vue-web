const load = name => () => import(`../views/${name}.vue`)

export default [
  {
    name: 'index',
    path: '/',
    component: load('index'),
    meta: {title: '首页', requireAuth: true}
  },
  {
    path: '/pop',
    component: load('pop'),
    meta: {title: '首页', requireAuth: true}
  }
]
