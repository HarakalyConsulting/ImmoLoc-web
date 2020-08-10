
const store = {namespaced: true};

store.state = {
    toolbarMessage: ''
};

store.getters = {

    getToolbarMessage: function(state)
    {
        return state.toolbarMessage;
    }

};

store.actions = {
};

store.mutations = {

    toolbarMessage: function(state, value)
    {
        state.toolbarMessage = value;
    }

};

export default store;
