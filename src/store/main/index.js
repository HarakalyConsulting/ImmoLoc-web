
const store = {namespaced: true};

store.state = {
    toolbarMessage: 'INITIAL VALUE'
};

store.getters = {

    getToolbarMessage: function(state)
    {
        return state.toolbarMessage + ' (+some text)';
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
