import { createStore } from 'vuex'
import LocalStorage from './../api/localstorage'

export default createStore({
  state: {
    memos: [
      {
        id: 1,
        content: 'foobar'
      }
    ],
    nextMemoId: 2
  },
  mutations: {
    setMemos (state, { memos, nextMemoId }) {
      state.memos = memos
      state.nextMemoId = nextMemoId
    }
  },
  actions: {
    fetchMemos ({ commit }) {
      const data = LocalStorage.fetchMemos()
      if (data) {
        commit('setMemos', JSON.parse(data))
      }
    }
  }
})
