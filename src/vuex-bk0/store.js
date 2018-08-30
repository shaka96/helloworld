import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_ITEM, DELETE_ITEM } from './mutations-type.js'
import { getItems as getters } from './getters.js'
// import { addItem , deleteItem } from './actions'
Vue.use(Vuex)

 const state = {
     items: [],
     name: ''
 }

 const actions = {
    [ADD_ITEM] : ({ commit }) => commit('ADD_ITEM' ),
    [DELETE_ITEM]: ({ commit }) => commit('DELETE_ITEM')
 }
 const mutations = {
    [ADD_ITEM] (state, item) {
        state.items.push(item);
    },
    [DELETE_ITEM] (state) {
        state.items.pop();
    }
};
 export default new Vuex.Store({
     state,
     getters,
     actions,
     mutations
 })