import _ from 'lodash';

export const strict = process.env.NODE_ENV !== 'production';

export const state = () => ({
    defaultLayoutData: {},
    homePageData: {},
});

export const getters = {
    navTitles: ({ defaultLayoutData }) => (
        _(defaultLayoutData.navTitles)
            .map(navTitle => navTitle.title)
            .value()
    ),
    imageTitlePrefix: ({ homePageData }) => (
        homePageData.imageTitlePrefix.value
    ),
    holidayImageTitle: ({ homePageData }) => (
        homePageData.header.image.title
    ),
    indexHeader: ({ homePageData }) => (
        homePageData.header
    ),
    horizontalH1: (state, { indexHeader }) => (
        indexHeader.horizontalH1
    ),
    verticalH1: (state, { indexHeader }) => (
        indexHeader.verticalH1
    ),
    indexIntroParagraph: (state, { indexHeader }) => (
        indexHeader.paragraph
    ),
    biographyBlock: ({ homePageData }) => (
        homePageData.biographyBlock
    ),
    biographyH2: (state, { biographyBlock }) => (
        biographyBlock.h2
    ),
    lifeEvents: (state, { biographyBlock }) => (
        _(biographyBlock.lifeEvents)
            .map(
                ({ year, description }) => ({
                    year,
                    description,
                }),
            )
            .sortBy(({ year }) => year || 0)
            .value()
    ),
    readMoreToggleData: ({ homePageData }) => (
        homePageData.readMoreToggle
    ),
    shareServices: ({ defaultLayoutData }) => (
        _(defaultLayoutData.shareServices)
            .map(({ service }) => service)
            .value()
    ),
    biographyShareBlock: (state, { biographyBlock }) => (
        biographyBlock.shareBlock
    ),
    paintingsBlock: ({ homePageData }) => (
        homePageData.paintingsBlock
    ),
    slidePreviews: (state, { paintingsBlock }) => (
        paintingsBlock.previews
    ),
    slides: (state, { paintingsBlock }) => (
        paintingsBlock.slides
    ),
};

export const mutations = {
    defaultLayoutDataSetting(state, defaultLayoutData) {
        state.defaultLayoutData = defaultLayoutData;
    },
    homePageDataSetting(state, homePageData) {
        state.homePageData = homePageData;
    },
    lifeEventsSetting({ homePageData }, lifeEvents) {
        homePageData.biographyBlock
            .lifeEvents = lifeEvents;
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
    async lifeEventsLoading({ commit }) {
        const lifeEvents = await this.$axios
            .$get(`${this.$axios.defaults.baseURL}/life-events`)
            .catch(() => { });
        commit('lifeEventsSetting', lifeEvents);
    },
};
