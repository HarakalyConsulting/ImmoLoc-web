const store = {namespaced: true};

store.state = {
  toolbarMessage: '',
  token: ''
};

store.getters = {

  getToolbarMessage: function (state) {
    return state.toolbarMessage;
  },
  getToken: function (state) {
    return state.token;
  }
};

store.actions = {};

store.mutations = {

  toolbarMessage: function (state, value) {
    state.toolbarMessage = value;
  },
  token: function(state, value){
    state.token = value;
  }
};

export default store;
