<template>
  <!-- <div class="hello" id="Hi">
    
    
  </div> -->
  <div id="Hi">
    <i-echart class="echarts-container"></i-echart>
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
import iEchart from './charts/echartDemo'
export default {
  name: 'hi',
  data () {
    return {
      // msg: 'This is Hi'
    }
  },
  components:{
    iEchart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .echarts-container{
      width: 100%;
      height: 20rem;
      /* width: 100px;
      height: 200px; */
      border: solid 1px greenyellow;
  }
</style>
