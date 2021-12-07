export const strict = process.env.NODE_ENV !== 'production';

export const getters = {
    indexHeader: (state, getters, { homePageData }) =>
        homePageData.header,
    image: (state, { indexHeader }) => indexHeader.image,
    imageTitle: (state, { image }) => image.title,
    logo: (state, { indexHeader }) => indexHeader.logo,
    horizontalH1: (state, { indexHeader }) =>
        indexHeader.horizontalH1,
    verticalH1: (state, { indexHeader }) =>
        indexHeader.verticalH1,
    indexIntroParagraph: (state, { indexHeader }) =>
        indexHeader.paragraph,
};
