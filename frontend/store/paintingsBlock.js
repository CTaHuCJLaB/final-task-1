export const strict = process.env.NODE_ENV !== 'production';

export const getters = {
    paintingsBlock: (state, getters, { homePageData }) =>
        homePageData.paintingsBlock,
    h2: (state, { paintingsBlock }) => paintingsBlock.h2,
    previewTitlePrefix: (state, { paintingsBlock }) =>
        paintingsBlock.previewTitlePrefix,
    slidePreviews: (state, { paintingsBlock }) =>
        paintingsBlock.previews,
    slides: (state, { paintingsBlock }) =>
        paintingsBlock.slides,
};
