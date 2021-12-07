import _ from 'lodash';
import loadData from '@/modules/loadData';

export const strict = process.env.NODE_ENV !== 'production';

export const state = () => ({
    defaultLayoutData: {},
    homePageData: {},
});

export const getters = {
    navTitles: ({ defaultLayoutData }) =>
        _(defaultLayoutData.navTitles)
            .map(navTitle => navTitle.title)
            .value(),
    shareServices: ({ defaultLayoutData }) =>
        _(defaultLayoutData.shareServices)
            .map(({ service }) => service),
    paintingTitlePrefix: ({ homePageData }) =>
        homePageData.paintingTitlePrefix,
    readMoreToggleData: ({ homePageData }) =>
        homePageData.readMoreToggle,
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
        const defaultLayoutData =
            await loadData(this, 'default-layout');
        commit('defaultLayoutDataSetting', defaultLayoutData);
    },
    async homePageDataLoading({ commit }) {
        const homePageData = await loadData(this, 'home-page');
        commit('homePageDataSetting', homePageData);
    },
    async lifeEventsLoading({ commit }) {
        const lifeEvents = await loadData(this, 'life-events');

        if (lifeEvents) {
            commit('lifeEventsSetting', lifeEvents);
        }

        return !!lifeEvents;
    },
};
