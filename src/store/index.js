import { createStore } from 'vuex'
import * as types from './mutation-type'

export default createStore({
  state: {
    memos: [
      {
        id: 1,
        content: '牛乳を買う'
      }
    ],
    action: null,

    // 次に追加するタスクのID
    nextTaskId: 2
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
    },

    [types.CHANGE_ACTION] (state, { action }) {
      state.action = action
    }
  },
  actions: {
  },
  modules: {
  }
})
