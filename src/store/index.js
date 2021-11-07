import { createStore } from 'vuex'
import * as types from './mutation-type'

export default createStore({
  state: {
  },
  mutations: {
    [types.ADD_MEMO] (state, payload) {
      // TODO:
      throw new Error('ADD_MEMO mutations should be implemented')
    },

    [types.UPDATE_MEMO] (state, payload) {
      // TODO:
      throw new Error('UPDATE_MEMO mutations should be implemented')
    },

    [types.REMOVE_MEMO] (state, payload) {
      // TODO:
      throw new Error('REMOVE_MEMO mutations should be implemented')
    }
  },
  actions: {
  },
  modules: {
  }
})
