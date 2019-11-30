import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baskets: [],
    total: 0
  },
  getters: {
    allBaskets: state => state.baskets,
    total: state => state.total
  },
  mutations: {
    addBasket(state, food) {
      state.baskets.push(food);
    },
    updateTotal(state, price) {
      state.total += price;
    }
  },
  actions: {
    addFood({ commit }, food) {
      commit('addBasket', food);
      commit('updateTotal', food.quantity * food.price);
    }
  }
})