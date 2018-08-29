// import 'babel-polyfill'
import Vue from 'vue'
import Appx from './components/Appx.vue'
import store from './store'
import { currency } from './currency'

Vue.filter('currency', currency)

new Vue({
    el: '#appx',
    store,
    render: h => h(Appx)
})