<template>
    <ul>
        <li v-for="product in products">
            {{ product.title }} - {{ product.price | currency }}
            <br>
            <button
                :disabled="!product.inventory"
                @click="addProductToCart(product)">
                Add to cart
            </button>
        </li>
    </ul>
</template>
 <script>
 import { mapState, mapActions } from 'vuex'
 import { currency } from '../currency.js'
//  import Vue from 'vue'
//  Vue.filter('currency', currency)
 export default {
     computed: mapState({
         products: state => state.products.all
         // 传字符串参数 'products' 等同于 `state => state.count`
     }),
     methods: mapActions('cart', [
         'addProductToCart'
     ]),
     created () {
         this.$store.dispatch('products/getAllProducts')
     }
 }
 </script>
 