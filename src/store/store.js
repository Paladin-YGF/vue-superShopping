import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutation'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
//数据持久化存储
const cartList = JSON.parse(window.localStorage.getItem('cartList') || '[]')
console.log(cartList)
const state = {
    cartList
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store