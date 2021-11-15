export const strict = process.env.NODE_ENV !== 'production';

export const state = () => ({
    defaultLayoutData: {},
    homePageData: {},
});

export const mutations = {
    setDefaultLayoutData(state, defaultLayoutData) {
        state.defaultLayoutData = defaultLayoutData;
    },
    setHomePageData(state, homePageData) {
        state.homePageData = homePageData;
    },
};

export const actions = {
    async loadDefaultLayoutData({ commit }) {
        const defaultLayoutData = await this.$axios
            .$get(
                `${this.$axios.defaults.baseURL}/default-layout`,
            )
            .catch(() => { });
        commit('setDefaultLayoutData', defaultLayoutData);
    },
    async loadHomePageData({ commit }) {
        const homePageData = await this.$axios
            .$get(`${this.$axios.defaults.baseURL}/home-page`)
            .catch(() => { });
        commit('setHomePageData', homePageData);
    },
};
