import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'
import Vuex from './components/Vuex.vue'
import { currency } from './currency'

Vue.filter('currency', currency)
new Vue({
    store,
    el: 'body',
    components: { App , Vuex}
})