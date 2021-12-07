import _ from 'lodash';

export const strict = process.env.NODE_ENV !== 'production';

export const getters = {
    biographyBlock: (state, getters, { homePageData }) =>
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
    shareServices: ({ defaultLayoutData }) =>
        _(defaultLayoutData.shareServices)
            .map(({ service }) => service)
            .value(),
    shareBlock: (state, { biographyBlock }) =>
        biographyBlock.shareBlock,
    shareTitle: (state, { shareBlock }) =>
        shareBlock.title,
    shareDescription: (state, { shareBlock }) =>
        shareBlock.description,
    shareImage: (state, { shareBlock }) =>
        shareBlock.image.url,
};
