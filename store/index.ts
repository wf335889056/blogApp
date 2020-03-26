import { GetterTree, ActionTree, MutationTree } from 'vuex'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  homeLoading: true as Boolean
})

export const mutations: MutationTree<RootState>  = {
  SET_HOMELOADING: state => state.homeLoading = false
}

export const actions: ActionTree<RootState, RootState>  = {
}

export const getters: GetterTree<RootState, RootState> = {
  homeLoading: state => state.homeLoading
}