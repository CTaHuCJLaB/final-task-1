import _ from 'lodash';
import { createSrc } from './base';

export const createSrcSet = (
    dotsPerPixelArray,
    relativeUrls, x1Width,
) => {
    return _(dotsPerPixelArray).map(
        (dotsPerPixel, index, array) => (
            createSrc(
                relativeUrls[index], x1Width,
                dotsPerPixel, index, array.length,
            )
        ),
    ).join(' ');
};

const addSrcSet = (
    srcSets, dotsPerPixelArray,
    relativeUrls, x1Width,
) => {
    const newSrcSet = createSrcSet(
        dotsPerPixelArray,
        relativeUrls, x1Width,
    );
    srcSets.push(newSrcSet);
};

export const createRestSrcSets = (
    dotsPerPixelArray,
    relativeUrls, x1Width,
) => {
    const srcSets = [];
    _(relativeUrls)
        .filter((value, key) => key > 0)
        .forEach(
            relativeUrls => {
                addSrcSet(
                    srcSets, dotsPerPixelArray,
                    relativeUrls, x1Width,
                );
            },
        );
    return srcSets;
};
