import Vue from 'vue'
import Vuex from 'vuex'


import getters from './getters'
import {card, board} from '../api/index'

Vue.use(Vuex)
const state = {
    token:null,    
    cards: [],    
    lists:[],
    bodyColor:'',
    lightColor : {
        '#ff9f74':'#faefe6', //orange
        '#ffc853':'#fffaf0', //yellow
        '#ffa6a3':'#fff5f5', //rospink
        '#a3daff':'#f0f9ff', //skyblue
        '#b98dcb':'#ece4f0', //purple
    },
    midColor:{
        '#ff9f74':'#faddc0', //orange
        '#ffc853':'#ffe9b9', //yellow
        '#ffa6a3':'#ffdcdb', //rospink
        '#a3daff':'#cfecff', //skyblue
        '#b98dcb':'#d7c1e0', //purple
    },
    isOpenMenu:false,
    currentMenu:'MAIN'

}

const mutations = {    
    SET_LIST(state, lists) {        
        state.lists = lists        
    },
    SET_BOARD_BY_ID(state,board){
        state.board = board
    },
    SET_CARD(state,cards){
        state.cards = cards
    },
    SET_THEME(state,color){
        state.bodyColor = color || '#ff9f74'        
    },
    SET_OPEN_BOARD_MENU(state,toggle){
        state.isOpenMenu = toggle
    },
    SET_CURRENT_MENU(state,menu){
        state.currentMenu = menu
    }
}

const actions = {
    GET_LIST({commit}) {        
        return board.fetch().then((res) => {            
            commit('SET_LIST', res)
        })
    },
    GET_CARD({ commit },{ id }) {        
        return card.fetch(id).then((res) => {
            commit('SET_CARD',res)
        })
    }
}

const store = new Vuex.Store({
    actions,
    mutations,
    getters,
    state
})



export default store