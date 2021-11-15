import _ from 'lodash';
import { toRefs, computed } from '@nuxtjs/composition-api';
import get1xWidths from '../utils/get1xWidths';
import getUrlSets from '../utils/getUrlSets';
import { createSrcSet, createRestSrcSets } from '../utils/srcSets';

export default props => {
    const {
        imageParamSets, dotsPerPixelArray,
    } = toRefs(props);
    const x1Widths = get1xWidths(imageParamSets.value);
    const relativeNotWebpUrlSets = getUrlSets(
        imageParamSets.value, 'notWebp',
    );
    const relativeWebpUrlSets = getUrlSets(
        imageParamSets.value, 'webp',
    );
    const zeroNotWebpSrcSet = computed(
        () => imageParamSets.value[0]
            ? createSrcSet(
                _(dotsPerPixelArray.value)
                    .slice(1).value(),
                _(relativeNotWebpUrlSets[0])
                    .slice(1).value(),
                x1Widths[0],
            )
            : undefined,
    );
    const notWebpSrcSets = computed(
        () => _(
            createRestSrcSets(
                dotsPerPixelArray.value,
                relativeNotWebpUrlSets,
                x1Widths,
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
                    relativeWebpUrlSets[0],
                    x1Widths[0],
                ),
            ]
            : [],
    );
    const webpSrcSets = computed(
        () => _(zeroWebpSrcSet.value)
            .concat(
                createRestSrcSets(
                    dotsPerPixelArray.value,
                    relativeWebpUrlSets,
                    x1Widths,
                ),
            )
            .reverse()
            .value(),
    );
    return {
        webpSrcSets,
        notWebpSrcSets,
        zeroNotWebpSrcSet,
    };
};
