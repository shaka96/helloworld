<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <hi></hi>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Hi from './components/Hi'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Hi
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
