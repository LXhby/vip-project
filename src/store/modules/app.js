const state = {
    title: ''
}

const mutations = {
    setTitle: (state, payload) => {
        state.title = payload
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}