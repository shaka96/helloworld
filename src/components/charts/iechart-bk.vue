<template>
    <div :id="_id" class="echarts"></div>
</template>
<script>
//https://www.jb51.net/article/125366.htm
import echarts from 'echarts'
// let $echartsDom = document.getElementById('');
export default {
  name: 'echarts',
  data () {
    return {
      option: {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
    }
  },
  methods:{

  },
  computed:{
    
  },
  watch: {
    _chartData(val){
      switch (this._type) {
        case "LineAndBar":
          drawLineAndBar(val, this._id, this._titleText, this._xText, this._yText);
          break;
        case "LineOrBar":
          drawLineOrBar(val, this._id, this._titleText, this._xText, this._yText);
        case "Pie":
          drawPie(val, this._id, this._titleText, this._xText, this._yText);
        default:
          drawLineAndBar(val, this._id, this._titleText, this._xText, this._yText);
          break;
      }
    }
  },
  mounted(){
    switch (this._type) {
      case "LineAndBar":
        drawLineAndBar(this._chartData, this._id, this._titleText, this._xText, this._yText);
        break;
      case "LineOrBar":
        drawLineOrBar(this._chartData, this._id, this._titleText, this._xText, this._yText);
      case "Pie":
        drawPie(this._chartData, this._id, this._titleText, this._xText, this._yText);
      default:
        drawLineAndBar(this._chartData, this._id, this._titleText, this._xText, this._yText);
        break;
    }
  }
}
</script>
<style scoped>
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>
