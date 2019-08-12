import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
    num: 1,
    str: 'hh',
    num2: 10,
    num3: 99,
    num4: 20
}

const getters = {
    num4(state) {
        return state.num4 += 100;
    }
}
const mutations = {
    add(state, n) {
        state.num += n
    },
    reduce(state) {
        state.num--
    },
    strs(state) {
        console.log(0);
    }
}
const actions = {
    addAction({ commit }) { 
        commit('add', 10)
    },
    reduceAction({ commit }) {
        commit('reduce')
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});