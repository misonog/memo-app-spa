<template>
<div class="col-3">
  <h2>一覧</h2>
  <ul>
    <li v-for="memo in memos" :key="memo.id">
      {{ generateTitle(memo.content) }}
    </li>
  </ul>
  <button class="btn btn-primary" @click="newMemo">新規作成</button>
</div>
</template>

<script>
export default {
  name: 'MemoIndex',

  computed: {
    memos () {
      return this.$store.state.memos
    }
  },

  methods: {
    generateTitle (content) {
      return content.split('\n')[0]
    },
    newMemo () {
      this.$emit('new-memo')
    }
  }
}
</script>
