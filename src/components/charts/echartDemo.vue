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
    import echarts from 'echarts'
    import { isValidOption } from './validate'
     export default {
        name: 'echarts',
        props: {
            option: {
                type: Object,
                default(){
                    return {
                        title: {
                            text: 'ECharts 入门示例'
                        },
                        tooltip: {},
                        legend: {
                            data: ['销量']
                        },
                        xAxis: {
                            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                        },
                        yAxis: {},
                        series: [{
                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20]
                        }]
                    }
                }
            }
        },
        data() {
            return {
    
            }
        },
        mounted() {
            let $echartsDOM = document.getElementById('echarts-dom')
            let myEcharts = echarts.init($echartsDOM)
            // let option = {
            //     title: {
            //         text: 'ECharts 入门示例'
            //     },
            //     tooltip: {},
            //     legend: {
            //         data: ['销量']
            //     },
            //     xAxis: {
            //         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            //     },
            //     yAxis: {},
            //     series: [{
            //         name: '销量',
            //         type: 'bar',
            //         data: [5, 20, 36, 10, 10, 20]
            //     }]
            // }
            // console.log('this:', this.$data.option)
            let option = this.option
                    // myEcharts.setOption(option)
        
            this.myEcharts = myEcharts
            this.checkAndSetOption()
        },
        watch: {
            option(option){
                this.checkAndSetOption()
            }
        },
        methods: {
            checkAndSetOption(){
                let option = this.option    //配置等于父组件传过来的数据
                if(isValidOption(option)){
                    this.myEcharts.setOption(option);       //渲染出来
                    this.myEcharts.hideLoading();           //隐藏加载动画
                }else{
                    this.myEcharts.showLoading();           //加载动画
                }
            }
        },
        created: {
            // ?? myEcharts.setOption(option);
        }
    }
</script>