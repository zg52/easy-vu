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
        add1(state) {
            state.number1++
        }
    },
    actions: {
        add1Actions({ commit }) {
            commit('add1')
        }
    }
}
//new
const modlue3 = {
    state: {
        URL: 'http://www.xuefu.com/byxf/data/image/',
        requestUrl: 'http://www.zg.com',//总数据接口
    }        
}
const loginModlue = {
    state: {
        token: localStorage.getItem('token') ?
               localStorage.getItem('token') : ''
    },
    mutations: {
        setToken(state, token) { //{token: res.token}
            state.token = token;
            localStorage.setItem("token", token.token);//存储token
        },
        delToken(state) {
            state.token = '';
            localStorage.removeItem("token");    //删除token
        }
    },
    actions: {
    },
    getters: {
    }
}
export default new Vuex.Store({
    modules: {
        first: modlue1,
        second: modlue2,
        third: modlue3,
        loginModlue: loginModlue
    }
});
