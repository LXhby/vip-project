const state = {
    title: '',
    isLoading: false,
    url: '',
    direction: 'forward'
}

const mutations = {
    setTitle: (state, payload) => {
        state.title = payload
    },
    updateLoadingStatus: (state, payload) => {
        state.isLoading = payload.isLoading
    },
    setUrl: (state, url) => {
        state.url = url;
    },
    updateDirection: (state, payload) => {
        state.direction = payload.direction
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