<style scoped>
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>

<template>
    <div>
        <div class="echarts" id="echarts-dom"></div>
    </div>
</template>

<script>
//https://segmentfault.com/a/1190000012803831
// # echart.vue
import echarts from 'echarts'

export default {
    name: 'echarts',
    props: {
        option: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    data() {
        return {}
    },
    mounted() {
        let $echartsDOM = document.getElementById('echarts-dom')
        let myEcharts = echarts.init($echartsDOM)
        let option = this.option
        myEcharts.setOption(option)
    }
}
</script>

