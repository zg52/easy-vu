import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);




const modlue1 = {
    state: {
        num: 1,
        str: 'hh',
        num2: 10,
        num3: 99,
        num4: 20
    },
    getters: {
        num4(state) {
            return state.num4 += 100;
        }
    },
    mutations: {
        add(state, n) {
            state.num += n
        },
        reduce(state) {
            state.num--
        },
        strs(state) {
            console.log(0);
        }
    },
    actions: {
        addAction({ commit }) {
            // setTimeout(()=>{commit('add',10)},3000);
            console.log('我比add提前执行');
            commit('add', 10)
        },
        reduceAction({ commit }) {
            commit('reduce')
        }
    }
}
const modlue2 = {
    state: {
        number1: 1
    },
    mutations: {
        add1 (state) {
            state.number1++
        }
    },
    actions: {
        add1Actions ({commit}) {
            commit('add1')
        }
    }
    
}
export default new Vuex.Store({
    modules: {
        first: modlue1,
        second: modlue2
    }
});