<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- 调用组件 -->
    <input type="text" v-model="message" />
    <!-- 动态传值 -->
    <HelloWorld :msg="message"></HelloWorld>
  </div>
</template>

<script>
// 导入组件
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'home',
  // 注册组件
  components: {
    HelloWorld
  },
  data () {
    return {
      message: ''
    }
  }
}
</script>
