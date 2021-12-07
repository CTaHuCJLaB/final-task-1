export const strict = process.env.NODE_ENV !== 'production';

export const getters = {
    paintingsBlock: (state, getters, { homePageData }) =>
        homePageData.paintingsBlock,
    previewTitlePrefix: (state, { paintingsBlock }) =>
        paintingsBlock.previewTitlePrefix,
    slidePreviews: (state, { paintingsBlock }) =>
        paintingsBlock.previews,
    slides: (state, { paintingsBlock }) =>
        paintingsBlock.slides,
};
