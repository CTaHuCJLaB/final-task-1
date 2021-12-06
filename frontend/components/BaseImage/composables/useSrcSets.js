import _ from 'lodash';
import { computed } from '@nuxtjs/composition-api';
import get1xWidths from '../utils/get1xWidths';
import getUrlSets from '../utils/getUrlSets';
import { createSrcSet, createRestSrcSets } from '../utils/srcSets';

export default
(image, dimensions, dotsPerPixelArray) => {
    let zero1xWidth;
    let zeroNotWebpUrlSet;
    let zeroWebpUrlSet;
    if (dimensions.mobile) {
        zero1xWidth = dimensions.mobile.x1Width;
        zeroNotWebpUrlSet = _(image.mobile.notWebp)
            .map(({ url }) => url).value();
        zeroWebpUrlSet = _(image.mobile.webp)
            .map(({ url }) => url).value();
    }
    const restDimensions = _(dimensions)
        .pickBy((dimension, key) => key !== 'mobile')
        .value();
    const restNotWebpUrlSets = getUrlSets(
        image, restDimensions, 'notWebp',
    );
    const restWebpUrlSets = getUrlSets(
        image, restDimensions, 'webp',
    );
    const rest1xWidths = get1xWidths(
        restDimensions,
    );
    const zeroNotWebpSrcSet = computed(
        () => dimensions.mobile
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
        () => dimensions.mobile
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
