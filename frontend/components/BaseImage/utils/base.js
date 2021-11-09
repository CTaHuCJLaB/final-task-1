import { trimEachWord } from '@/modules/stringProcessing';

export const createSrc = (
    relativeUrl, image1xWidth,
    dotsPerPixel, srcIndex,
    srcCount,
) => (
    trimEachWord(`
        ${process.env.baseUrl + relativeUrl}
        ${image1xWidth * dotsPerPixel}w
    `).concat(
        `${srcIndex !== srcCount - 1
            ? ','
            : ''
        }`,
    )
);
