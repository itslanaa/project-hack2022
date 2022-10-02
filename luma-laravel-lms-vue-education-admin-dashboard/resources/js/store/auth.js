import axios from '@/http'

export const state = () => ({
  status: null,
  token: null,
  user: null
})

export const getters = {
  isLoggedIn: state => !!state.user,
  authStatus: state => state.status,
}

export const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, user) {
    state.status = 'success'
    state.user = user
  },
  auth_forgot_password_success(state) {
    state.status = 'forgotPassword.success'
  },
  auth_error(state) {
    state.status = 'error'
    state.user = null
  },
  auth_token(state, token) {
    state.token = token
  },
  logout(state) {
    state.status = null
    state.user = null
    state.token = null
  },
}

export const actions = {
  getUser({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      let config = {}
      if (state.token) {
        config = {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        }
      }
      axios.get(process.env.MIX_AUTH_USER_PATH, config)
        .then(resp => {
          const user = resp.data
          commit('auth_success', user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          reject(err)
        })
    })
  },

  login({ commit, dispatch }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios.get(process.env.MIX_AUTH_SANCTUM_CSRF_COOKIE_PATH).then(() => {
        axios.post(process.env.MIX_AUTH_LOGIN_PATH, user)
          .then(resp => {
            try {
              const token = resp.data.token
              commit('auth_token', token)
            // eslint-disable-next-line no-empty
            } catch(e) {}
            dispatch('getUser')
          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
      })
    })
  },

  register({ commit, dispatch }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios.post(process.env.MIX_AUTH_REGISTER_PATH, user)
        .then(() => dispatch('login', user))
        .catch((err, data) => {
          commit('auth_error', err)
          reject(err, data)
        })
    })
  },

  async logout({ commit }) {
    try {
      await axios.post(process.env.MIX_AUTH_LOGOUT_PATH)
    }
    // eslint-disable-next-line no-empty
    catch(e) {}

    commit('logout')
  },

  forgotPassword({ commit }, form) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios.post(process.env.MIX_AUTH_FORGOT_PASSWORD_PATH, form)
        .then(() => commit('auth_forgot_password_success'))
        .catch((err, data) => {
          commit('auth_error', err)
          reject(err, data)
        })
    })
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
