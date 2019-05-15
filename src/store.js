import Vue from 'vue'
import Vuex from 'vuex'

import data from './store/data'
import cart from './store/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    data,
    cart
  },
})
