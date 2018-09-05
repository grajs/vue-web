const load = name => () => import(`../views/${name}.vue`)

export default [
  {
    path: '/',
    component: load('index'),
    meta: {title: '首页'}
  },
  {
    path: '/table',
    component: load('table'),
    meta: {title: 'table'}
  }
]