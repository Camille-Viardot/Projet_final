import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import jwt from 'jsonwebtoken'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allToken: null,
    allContacts: null,
    allLiens: null
  },

  getters: {
    getToken: state => {
      return state.allToken
    },

    getPayload: state => {
      const payload = jwt.decode(state.allToken)
      return payload
    },

    getContact: state => {
      return state.allContacts
    }
  },

  mutations: {
    RECUP_TOKEN (state, token) {
      state.allToken = token
    },

    RECUP_TOKEN_SECONDAIRE (state, token) {
      state.allToken = token
    },

    DELETE_TOKEN (state) {
      state.allToken = null
    }
  },
  actions: {
    recupToken (context, token) {
      console.log(token)
      context.commit('RECUP_TOKEN', token)
    },

    recupTokenSecondaire (context, token) {
      console.log(token)
      context.commit('RECUP_TOKEN_SECONDAIRE', token)
    },

    deleteToken (context) {
      context.commit('DELETE_TOKEN')
    }
  },

  plugins: [createPersistedState()]
})
