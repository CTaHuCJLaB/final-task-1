import { replaceSpaces, trimEachWord } from '@/modules/stringProcessing';

export const computeFullFileName = (
    path, fileName,
    dotsPerPixel, fileExtension,
) => (
    replaceSpaces(`
    ${path}
    /${fileName}
    @${dotsPerPixel}x
    .${fileExtension}
  `, '')
);

export const createSrc = (
    fullFileName, image1xWidth,
    dotsPerPixel, srcIndex,
    srcCount,
) => (
    trimEachWord(`
    ${fullFileName}
    ${image1xWidth * dotsPerPixel}w
  `).concat(
        `${srcIndex !== srcCount - 1
            ? ','
            : ''
        }`,
    )
);
