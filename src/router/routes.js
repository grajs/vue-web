const load = name => () => import(`../views/${name}.vue`)

export default [
  {
    name: 'index',
    path: '/',
    component: load('index'),
    meta: { title: '首页' }
  }
]
