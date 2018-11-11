import Axios from 'axios'
import store from '../store'

const axios = (url, data = {}, method = 'get', formData = false) => new Promise((resolve, reject) => {
  let cancelToken = null
  if (data.cancelToken instanceof Axios.CancelToken) {
    cancelToken = data.cancelToken
    delete data.cancelToken
  }

  const config = {
    headers: { 'Authorization': store.state.token },
    url,
    method,
    params: method === 'get' ? data : null,
    cancelToken
  }

  if (formData === true) {
    const formData = new FormData()
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key])
      }
    }
    config.data = formData
  } else {
    config.data = data
  }

  Axios(config).then(res => {
    if (res.status >= 200 && res.status < 400 && res.data.code === 0) {
      resolve(res.data.data)
    } else {
      reject(res.data.message)
    }
  }).catch(err => reject(err))
})

export default {
  install(Vue) {
    Vue.prototype.$axios = axios
  }
}
