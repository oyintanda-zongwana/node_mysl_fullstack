import { createStore } from 'vuex'
import axios from 'axios';
import {toast} from 'vue3-toastify'
import "vue3-toastify/dist/index.css";
import {useCookies} from 'vue-cookies'
import router from '@/router';

axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')

export default createStore({
  state: {
    users: null,
    fruits: null
  },
  getters: {
    // setUsers(state, payload){
    //   state.users = payload;
    // }
    // setLogin(state, payload){
    //   state.users = payload;
    // }
  },
  mutations: {
    setFruits(state, payload) {
      state.fruits = payload;
    }
  },
  actions: {
    async addUser({commit},info){
      let data = await axios.post('http://localhost:5500/user/insert',info);
      console.log(data);
    },
    async loginUser({commit},info){
      let {data} =  await axios.post('http://localhost:5500/user/login',info);
      console.log(data);
      $cookies.set('token', data.token)
      if(data.message){
        toast("Login is successful",{
          "theme": "dark",
          "type": "default",
          "position": "top-center",
          "transition": "zoom",
          "dangerouslyHTMLString": true
        })
      }
      await router.push('/')
      location.reload()
    },
    async getFruits  ({commit}){
      let {data} = await axios.get('http://localhost:5500/fruit');
      console.log(data);
      commit('setFruits', data)
    }, 
    async addToCart ({commit}, fruit_id){
      let {data} = await axios.post('http://localhost:5500/fruit/cart', {id:fruit_id})
      console.log(data);
    }
  },
  modules: {
  }
})
