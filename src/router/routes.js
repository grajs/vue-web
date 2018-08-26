const load = name => () => import(`../views/${name}.vue`)

export default [
  {path: '/', component: load('index')}
]