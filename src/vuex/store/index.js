import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
// import createLogger from '../../src/plugins/logger'
// import chatModule from './modules/chat/index'
// import productsModule from './modules/products/index'
// 在Vue中注入Vuex
Vue.use(Vuex);
// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        // chat: chatModule,
        // products: productsModule，
        cart,
        products
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
});
