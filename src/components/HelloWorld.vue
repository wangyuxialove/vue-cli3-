<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 调用组件 -->
    <!-- 使用动态绑定进行传值 ，这样就可以把 hello world！ 传递到子组件中显示了-->
    <child @listenToChildEvent="showMsgFromChild"></child>
    <!-- 显示子组件传递的数据 -->
    <p>子组件传递的值是：{{ childMsg }}</p>
    <!-- vuex使用 -->
    <p>store 中的值是:{{ this.$store.state.count }}</p>
    <p>
      从store的getters属性中获取的计算值:
      {{ this.$store.getters.getStateCount }}
    </p>
    <p>修改state中count的值：{{ this.$store.state.count }}</p>
    <button @click="addFun">点击加</button>
    <button @click="reductionFun">点击减</button>
  </div>
</template>
<script>
// 引入子组件
import child from './child.vue'
export default {
  name: 'HelloWorld',
  // 注册子组件
  components: {
    child
  },
  // 父组件向子组件传值
  props: ['msg'],
  data () {
    return {
      childMsg: ''
    }
  },

  methods: {
    showMsgFromChild: function (data) {
      // data参数就是接收的数据
      console.log(data);
      // 传递过来的数据赋值给 childMsg 用于页面显示
      this.childMsg = data;
    },
    // 修改state.count的值
    // 直接修改store中的值
    //     addFun () {
    //       // console.log('+')
    //       // 将add方法提交给mutations
    //       this.$store.commit('add')
    //     },
    //     reductionFun () {
    //       // console.log('-')
    //       this.$store.commit('reduction')
    //     }
    addFun () {
      this.$store.dispatch('addFun')
    },
    reductionFun () {
      const n = 10
      this.$store.dispatch('reductionFun', n)
    }

  }
}
</script>

<style scoped lang="scss">
</style>
