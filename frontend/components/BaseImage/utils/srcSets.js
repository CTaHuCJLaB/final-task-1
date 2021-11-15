import _ from 'lodash';
import { createSrc } from './base';

export const createSrcSet = (
    dotsPerPixelArray,
    relativeUrls, x1Width,
) => _(dotsPerPixelArray).map(
    (dotsPerPixel, index, array) => (
        createSrc(
            relativeUrls[index], x1Width,
            dotsPerPixel, index, array.length,
        )
    ),
).join(' ');

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
    relativeUrlSets, x1Width,
) => {
    const srcSets = [];
    _(relativeUrlSets)
        .slice(1)
        .forEach(
            (relativeUrlSet, index) => {
                addSrcSet(
                    srcSets,
                    dotsPerPixelArray,
                    relativeUrlSet,
                    x1Width[index + 1],
                );
            },
        );
    return srcSets;
};
