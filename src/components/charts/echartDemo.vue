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
            // try {
            //     if(options)
                    myEcharts.setOption(option)
            // } catch (error) {
                
            // }
            
        },
        created: {
            // ?? myEcharts.setOption(option);
        }
    }
</script>