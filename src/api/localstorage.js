const STORAGE_KEY = 'memo-app-spa'

export default {
  fetchMemos () {
    return localStorage.getItem(STORAGE_KEY)
  }
}
