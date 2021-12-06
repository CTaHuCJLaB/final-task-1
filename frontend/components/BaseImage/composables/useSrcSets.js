import _ from 'lodash';
import { computed } from '@nuxtjs/composition-api';
import get1xWidths from '../utils/get1xWidths';
import getUrlSets from '../utils/getUrlSets';
import { createSrcSet, createRestSrcSets } from '../utils/srcSets';

export default
(imageParamSets, dotsPerPixelArray) => {
    let zero1xWidth;
    let zeroNotWebpUrlSet;
    let zeroWebpUrlSet;
    if (imageParamSets[0]) {
        zero1xWidth = imageParamSets[0].x1Width;
        zeroNotWebpUrlSet = imageParamSets[0]
            .relativeUrls.notWebp;
        zeroWebpUrlSet = imageParamSets[0]
            .relativeUrls.webp;
    }
    const restImageParamSets = _(imageParamSets)
        .filter((imageParamSets, key) => key > 0)
        .value();
    const restNotWebpUrlSets = getUrlSets(
        restImageParamSets, 'notWebp',
    );
    const restWebpUrlSets = getUrlSets(
        restImageParamSets, 'webp',
    );
    const rest1xWidths = get1xWidths(
        restImageParamSets,
    );
    const zeroNotWebpSrcSet = computed(
        () => imageParamSets[0]
            ? createSrcSet(
                _(dotsPerPixelArray)
                    .slice(1).value(),
                _(zeroNotWebpUrlSet)
                    .slice(1).value(),
                zero1xWidth,
            )
            : null,
    );
    const restNotWebpSrcSets = computed(
        () => _(
            createRestSrcSets(
                dotsPerPixelArray,
                restNotWebpUrlSets,
                rest1xWidths,
            ),
        )
            .reverse()
            .value(),
    );
    const zeroWebpSrcSet = computed(
        () => imageParamSets[0]
            ? [
                createSrcSet(
                    dotsPerPixelArray,
                    zeroWebpUrlSet,
                    zero1xWidth,
                ),
            ]
            : [],
    );
    const webpSrcSets = computed(
        () => _(zeroWebpSrcSet.value)
            .concat(
                createRestSrcSets(
                    dotsPerPixelArray,
                    restWebpUrlSets,
                    rest1xWidths,
                ),
            )
            .reverse()
            .value(),
    );
    return {
        webpSrcSets,
        restNotWebpSrcSets,
        zeroNotWebpSrcSet,
    };
};
