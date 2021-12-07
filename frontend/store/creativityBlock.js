export const strict = process.env.NODE_ENV !== 'production';

export const getters = {
    creativityBlock: (state, getters, { homePageData }) =>
        homePageData.creativityBlock,
    h2: (state, { creativityBlock }) =>
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
    shareBlock: (state, { creativityBlock }) =>
        creativityBlock.shareBlock,
    shareTitle: (state, { shareBlock }) =>
        shareBlock.title,
    shareDescription: (state, { shareBlock }) =>
        shareBlock.description,
    shareImage: (state, { shareBlock }) =>
        shareBlock.image.url,
};
