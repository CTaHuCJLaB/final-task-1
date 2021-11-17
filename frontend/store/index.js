import _ from 'lodash';

export const strict = process.env.NODE_ENV !== 'production';

export const state = () => ({
    defaultLayoutData: {},
    homePageData: {},
});

export const getters = {
    navTitles: state => (
        _(state.defaultLayoutData.navTitles)
            .map(navTitle => navTitle.title)
            .value()
    ),
    imageTitlePrefix: state => (
        state.homePageData
            .imageTitlePrefix.value
    ),
    holidayImageTitle: state => (
        state.homePageData
            .header.image.title
    ),
    horizontalH1: state => (
        state.homePageData
            .header.horizontalH1
    ),
    verticalH1: state => (
        state.homePageData
            .header.verticalH1
    ),
    indexIntroParagraph: state => (
        state.homePageData
            .header.paragraph
    ),
};

export const mutations = {
    defaultLayoutDataSetting(state, defaultLayoutData) {
        state.defaultLayoutData = defaultLayoutData;
    },
    homePageDataSetting(state, homePageData) {
        state.homePageData = homePageData;
    },
};

export const actions = {
    async defaultLayoutDataLoading({ commit }) {
        const defaultLayoutData = await this.$axios
            .$get(
                `${this.$axios.defaults.baseURL}/default-layout`,
            )
            .catch(() => { });
        commit('defaultLayoutDataSetting', defaultLayoutData);
    },
    async homePageDataLoading({ commit }) {
        const homePageData = await this.$axios
            .$get(`${this.$axios.defaults.baseURL}/home-page`)
            .catch(() => { });
        commit('homePageDataSetting', homePageData);
    },
};
