import {fetch} from '../utils/axios'

export default (router, store) => router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.title) && document) {
    document.title = to.meta.title
  }
  next()
})