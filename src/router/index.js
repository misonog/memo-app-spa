import { createRouter, createWebHashHistory } from 'vue-router'
import MemoList from '../components/MemoList'
import MemoEditor from '../components/MemoEditor'

const routes = [
  {
    path: '/',
    name: 'memoList',
    component: MemoList
  },
  {
    path: '/editor',
    name: 'newEditor',
    component: MemoEditor
  },
  {
    path: '/editor/:id',
    name: 'updateEditor',
    component: MemoEditor
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
