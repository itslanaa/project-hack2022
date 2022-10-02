import axios from 'axios'

// axios.defaults.baseURL = process.env.VUE_APP_AXIOS_BASE_URL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.withCredentials = true

export default axios