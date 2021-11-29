import _ from 'lodash';
import { toRefs, computed } from '@nuxtjs/composition-api';
import get1xWidths from '../utils/get1xWidths';
import getUrlSets from '../utils/getUrlSets';
import { createSrcSet, createRestSrcSets } from '../utils/srcSets';

export default props => {
    const {
        imageParamSets, dotsPerPixelArray,
    } = toRefs(props);
    let zero1xWidth;
    let zeroNotWebpUrlSet;
    let zeroWebpUrlSet;
    if (imageParamSets.value[0]) {
        zero1xWidth = imageParamSets.value[0].x1Width;
        zeroNotWebpUrlSet = imageParamSets.value[0]
            .relativeUrls.notWebp;
        zeroWebpUrlSet = imageParamSets.value[0]
            .relativeUrls.webp;
    }
    const restImageParamSets = _(imageParamSets.value)
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
        () => imageParamSets.value[0]
            ? createSrcSet(
                _(dotsPerPixelArray.value)
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
                dotsPerPixelArray.value,
                restNotWebpUrlSets,
                rest1xWidths,
            ),
        )
            .reverse()
            .value(),
    );
    const zeroWebpSrcSet = computed(
        () => imageParamSets.value[0]
            ? [
                createSrcSet(
                    dotsPerPixelArray.value,
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
                    dotsPerPixelArray.value,
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
