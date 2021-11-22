<template>
  <ul>
    <li v-for="memo in memos" :key="memo.id">
      <router-link :to="{ name: 'updateEditor', params: { id: memo.id } }">
        {{ generateTitle(memo.content) }}
      </router-link>
    </li>
  </ul>
  <button type="button" class="btn btn-primary">
    <router-link :to="{ name: 'newEditor' }" class="text-reset">新規作成</router-link>
  </button>
</template>

<script>
export default {
  name: 'MemoList',

  computed: {
    memos () {
      return this.$store.state.memos
    }
  },

  methods: {
    generateTitle (content) {
      return content.split('\n')[0]
    }
  }
}
</script>
