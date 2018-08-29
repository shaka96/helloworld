<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <hi></hi>
    <vuex></vuex>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Hi from './components/Hi'
import Vuex from './vuex/components/Appx.vue'
import store from './vuex/store'


export default {
  name: 'App',
  store,
  components: {
    HelloWorld,
    Hi,
    Vuex
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
