import axios from "axios";

const userModule = {
  namespaced: true,
  state: {
    user: [],
    userPost: [],
    userDetails: [],
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload;
    },
    SET_USER_DATA: (state, payload) => {
      state.userDetails = payload;
    },
  },
  actions: {
    fetchUser: async ({ commit }) => {
      try {
        const result = [];
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/`
        );
        res?.data &&
          res.data.map((user, index) => {
            result.push(user.name);
          });
        commit("SET_USER", result);
        commit("SET_USER_DATA", res?.data || []);
      } catch (error) {
        console.log(error);
      }
    },
    getUserDetails: ({ state, commit }, payload) => {
      let currentUser = {};
      state.userDetails.map((user) => {
        if (user.name === payload) {
          currentUser = user;
        }
      });
      return currentUser;
    },
  },
  getters: {
    user: (state) => state.user,
    userPost: (state) => state.userPost,
    userDetails: (state) => state.userDetails,
  },
};

export default userModule;
