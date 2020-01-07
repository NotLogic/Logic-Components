import Vue from 'vue'
import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex'
import { commonState } from './type'

Vue.use(Vuex)
const state:commonState = {}
const getters: GetterTree<commonState, any> = {}
const mutations: MutationTree<commonState> = {}
const actions: ActionTree<commonState, any> = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
