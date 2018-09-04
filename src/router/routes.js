const load = name => () => import(`../views/${name}.vue`)

export default [
  {
    path: '/',
    component: load('index'),
    meta: {title: '首页'}
  },
  {
    path: '/demo/:id',
    component: load('index'),
    meta: {title: '示例页'}
  },
  {
    path: '/table',
    component: load('table'),
    meta: {title: 'table'}
  },
  {
    path: '/list',
    component: load('list'),
    meta: {title: '列表'}
  }
]