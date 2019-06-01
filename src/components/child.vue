<template>
  <div class="child">
    <h2>child子组件部分</h2>
    <button @click="sendMsgToParent">向父组件传值</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['message'],
  methods: {
    sendMsgToParent () {
      this.$emit('listenToChildEvent', 'this message from child')
      // 使用自定义事件传递
      // 传递一句话过去
    }
  }
}
</script>

<style scoped>
</style>
