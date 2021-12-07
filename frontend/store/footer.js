export const strict = process.env.NODE_ENV !== 'production';

export const getters = {
    shareBlock:
        (state, getters, { defaultLayoutData }) =>
            defaultLayoutData.shareBlock,
    shareTitle: (state, { shareBlock }) =>
        shareBlock.title,
    shareDescription: (state, { shareBlock }) =>
        shareBlock.description,
    shareImage: (state, { shareBlock }) =>
        shareBlock.image.url,
};
