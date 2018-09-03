import {fetch} from '../utils/axios'

export default (router, store) => router.beforeEach((to, from, next) => {
  next()
})