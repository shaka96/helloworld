<template>
    <div class="content">
        <div class="item" v-for="item  in items" :key="item.content">
            <!-- <li v-for="item in items"></li> -->
            {{ item.content }}
        </div>
    </div>
</template>
<script>
import { getItems } from '../../vuex/getters'
export default {
    data() {
        return {
            items: [
                {
                    content: 'item1'
                },
                {
                    content: 'item2'
                }
            ]
        }
    },
    vuex: {
        getters: {
            // items: state => state.items
            items: getItems
        },
    }
}
</script>
