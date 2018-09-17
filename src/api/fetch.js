import axios from 'axios'
import store from '../store'

export default (url, data = {}, method = 'get', formData = false) => new Promise((resolve, reject) => {
  const config = {
    headers: {'Authorization': store.state.token},
    url,
    method,
    params: method === 'get' ? data : null
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

  axios(config).then(({status, data}) => {
    if (status >= 200 && status < 400 && data.code === 0) {
      resolve(data)
    } else {
      reject(data)
    }
  }).catch(err => reject({data: {message: err.message}}))
})
