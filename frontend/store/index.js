import _ from 'lodash';

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
    footerShareBlock: ({ defaultLayoutData }) =>
        defaultLayoutData.shareBlock,
    footerShareTitle: (state, { footerShareBlock }) =>
        footerShareBlock.title,
    footerShareDescription: (state, { footerShareBlock }) =>
        footerShareBlock.description,
    footerShareImage: (state, { footerShareBlock }) =>
        footerShareBlock.image.url,
    paintingTitlePrefix: ({ homePageData }) =>
        homePageData.paintingTitlePrefix,
    holidayImageTitle: ({ homePageData }) =>
        homePageData.header.image.title,
    indexHeader: ({ homePageData }) =>
        homePageData.header,
    horizontalH1: (state, { indexHeader }) =>
        indexHeader.horizontalH1,
    verticalH1: (state, { indexHeader }) =>
        indexHeader.verticalH1,
    indexIntroParagraph: (state, { indexHeader }) =>
        indexHeader.paragraph,
    biographyBlock: ({ homePageData }) =>
        homePageData.biographyBlock,
    biographyH2: (state, { biographyBlock }) =>
        biographyBlock.h2,
    lifeEvents: (state, { biographyBlock }) =>
        _(biographyBlock.lifeEvents)
            .map(
                ({ year, description }) => ({
                    year,
                    description,
                }),
            )
            .sortBy(({ year }) => year || 0)
            .value(),
    readMoreToggleData: ({ homePageData }) =>
        homePageData.readMoreToggle,
    shareServices: ({ defaultLayoutData }) =>
        _(defaultLayoutData.shareServices)
            .map(({ service }) => service)
            .value(),
    biographyShareBlock: (state, { biographyBlock }) =>
        biographyBlock.shareBlock,
    biographyShareTitle: (state, { biographyShareBlock }) =>
        biographyShareBlock.title,
    biographyShareDescription: (state, { biographyShareBlock }) =>
        biographyShareBlock.description,
    biographyShareImage: (state, { biographyShareBlock }) =>
        biographyShareBlock.image.url,
    paintingsBlock: ({ homePageData }) =>
        homePageData.paintingsBlock,
    previewTitlePrefix: (state, { paintingsBlock }) =>
        paintingsBlock.previewTitlePrefix,
    slidePreviews: (state, { paintingsBlock }) =>
        paintingsBlock.previews,
    slides: (state, { paintingsBlock }) =>
        paintingsBlock.slides,
    creativityBlock: ({ homePageData }) =>
        homePageData.creativityBlock,
    creativityH2: (state, { creativityBlock }) =>
        creativityBlock.h2,
    introParagraph: (state, { creativityBlock }) =>
        creativityBlock.introParagraph,
    firstParagraph: (state, { creativityBlock }) =>
        creativityBlock.firstParagraph,
    secondParagraph: (state, { creativityBlock }) =>
        creativityBlock.secondParagraph,
    thirdParagraph: (state, { creativityBlock }) =>
        creativityBlock.thirdParagraph,
    firstImage: (state, { creativityBlock }) =>
        creativityBlock.firstImage,
    secondImage: (state, { creativityBlock }) =>
        creativityBlock.secondImage,
    creativityShareBlock: (state, { creativityBlock }) =>
        creativityBlock.shareBlock,
    creativityShareTitle: (state, { creativityShareBlock }) =>
        creativityShareBlock.title,
    creativityShareDescription: (state, { creativityShareBlock }) =>
        creativityShareBlock.description,
    creativityShareImage: (state, { creativityShareBlock }) =>
        creativityShareBlock.image.url,
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

const loadData = async ({ $axios }, relativeUrl) =>
    await $axios
        .$get(
            `${$axios.defaults.baseURL}/${relativeUrl}`,
        )
        .catch(error => {
            if (process.browser) {
                window.alert(
                    'Не удается получить данные с сервера' +
                    ` из - за ошибки ${error}`,
                );
            }
        });

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
