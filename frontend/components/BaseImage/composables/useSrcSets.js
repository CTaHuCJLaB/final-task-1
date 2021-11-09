import _ from 'lodash';
import { toRefs, computed } from '@nuxtjs/composition-api';
import { createSrcSet, createRestSrcSets } from '../utils/srcSets';

export default props => {
    const {
        imageParamSets,
        dotsPerPixelArray,
    } = toRefs(props);
    const {
        relativeUrls, x1Width,
    } = imageParamSets[0];
    const zeroNotWebpSrcSet = computed(
        () => (
            imageParamSets.value[0]
                ? createSrcSet(
                    _(dotsPerPixelArray.value)
                        .slice(1).value(),
                    relativeUrls.notWebp,
                    x1Width,
                )
                : undefined
        ),
    );
    const notWebpSrcSets = computed(
        () => (
            _(
                createRestSrcSets(
                    imageParamSets.value,
                    dotsPerPixelArray.value,
                    relativeUrls.notWebp,
                    x1Width,
                ),
            )
                .reverse()
                .value()
        ),
    );
    const zeroWebpSrcSet = computed(
        () => (
            imageParamSets.value[0]
                ? [
                    createSrcSet(
                        _(dotsPerPixelArray.value)
                            .slice(1).value(),
                        relativeUrls.webp,
                        x1Width,
                    ),
                ]
                : []
        ),
    );
    const webpSrcSets = computed(
        () => _(zeroWebpSrcSet.value)
            .concat(
                createRestSrcSets(
                    imageParamSets.value,
                    dotsPerPixelArray.value,
                    relativeUrls.webp,
                    x1Width,
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
