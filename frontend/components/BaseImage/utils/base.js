export const createSrc = (
    relativeUrl, image1xWidth,
    dotsPerPixel, srcIndex,
    srcCount,
) => dotsPerPixel
    ? `${process.env.baseURL + relativeUrl}` +
        ` ${image1xWidth * dotsPerPixel}w` +
        `${srcIndex !== srcCount - 1
            ? ','
            : ''
        }`
    : '';
