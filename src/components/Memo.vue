<template>
  <div class="row align-items-start">
    <div class="col-3">
      <MemoList @new-memo="changeAction('new')"></MemoList>
    </div>
    <div class="col-9">
      <MemoNew v-if="action === 'new'"></MemoNew>
    </div>
  </div>
</template>

<script>
import MemoList from './MemoList'
import MemoNew from './MemoNew'

export default {
  name: 'Memo',

  components: {
    MemoList,
    MemoNew
  },

  computed: {
    action () {
      return this.$store.state.action
    }
  },

  methods: {
    changeAction (action) {
      this.$store.commit('CHANGE_ACTION', {
        action: action
      })
    }
  }
}
</script>
