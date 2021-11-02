export const strict = process.env.NODE_ENV !== 'production';

export const state = () => ({
    navTitles: [],
});

export const mutations = {
    setNavTitles(state, navTitles) {
        state.navTitles = navTitles;
    },
};

export const actions = {
    async loadNavTitles({ commit }) {
        const navTitles = await this.$axios
            .$get('/nav-titles')
            .catch(() => { });
        commit('setNavTitles', navTitles);
    },
};
