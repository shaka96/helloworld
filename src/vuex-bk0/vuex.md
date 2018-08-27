

[1.使用Vuex中的 mapMutations 辅助函数时怎么传递参数（Payload）](https://segmentfault.com/q/1010000008727067)
用this.$store.commit('xxx',obj)时可以传递一个obj，那么用mapMutations()时怎么传递一个额外的参数。
并没有在官方文档上找到方法。
**使用 this.$store.commit()时** 两种格式都能提交附加的数据
```
方法一：
store.commit('increment', {
  amount: 10
})

方法二：
store.commit({
  type: 'increment',
  amount: 10
})
```
**使用mapMutations()时** 就没发现有提交的位置
```
import { mapMutations } from 'vuex'
export default {
  // ...
  methods: {
    ...mapMutations([
      'increment' // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
    ...mapMutations({
      add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
    })
  }
}
```
this.increment({ amount: 10 }) 或 this.add({ amount: 10 })

>以例子中method的increment方法为例：
increment(...args){
    return this.$store.dispatch.apply(this.$store,['incrememt'].concat(args))
}

>使用了扩展函数了之后，直接在调用的地方传入参数，会自动传递的
```
<button @click='reduce(10)'>减</button>
```
```
methods:{
      ...mapMutations(['reduce'])
    },
methods:{
      ...mapMutations({
          reduce:'reduce'
      })
    },
```