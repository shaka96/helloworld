<template>
    <ul class="side list-unstyled">
        <li @click="addItem({ content: Math.random() })">增加</li>
        <li @click="deleteItem({})">减少</li>
    </ul>
</template>
<script>
// import { addItem, deleteItem } from '../../vuex/actions'
import { addItem, deleteItem } from '../../vuex/store'
import store from '../../vuex/store'
export default {
    data() {
        return {
                items: [],
                content: '',   
        }
    },
    // method:{

    // },
    vuex: {
        actions: {
            addItem: store.commit('addItem'),
            deleteItem :store.commit('deleteItem')
            // addItem: $store.commit('addItem'),
            // deleteItem :$store.commit('deleteItem')
        }
    }
}
</script>
