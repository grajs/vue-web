import routes from './routes'

export default {
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
}