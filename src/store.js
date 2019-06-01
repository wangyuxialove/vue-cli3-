import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 全局使用vuex
Vue.use(Vuex)
// 创建store实例，用export default导出store
export default new Vuex.Store({
  state: {
    count:1

  },
  mutations: {
    add(state) {
      state.count = state.count + 1
    },
    reduction(state,n){
      state.count = state.count - n
    }

  },
  actions: {
//     addFun(context) { //接受一个与store实例具有相同方法属性的context对象
//        context.commit('add')
//     },
     reductionFun(context,n) { //接受一个与store实例具有相同方法属性的context对象
       context.commit('reduction',n)
    },
    // 异步
    addFun({commit}) {
      setTimeout(()=>{
        commit('add')
      },1000)
    }
    

  },
  getters:{
    getStateCount(state) {
      return state.count+1
    }
  }
})
