import _ from 'lodash';
import { toRefs, computed } from '@nuxtjs/composition-api';
import { createSrcSet, createRestSrcSets } from '../utils/srcSets';

export default props => {
    const {
        path, imageParamSets,
        baseFileExtension,
        dotsPerPixelArray,
    } = toRefs(props);
    const zeroNotWebpSrcSet = computed(
        () => (
            imageParamSets.value[0]
                ? createSrcSet(
                    path.value,
                    imageParamSets.value[0],
                    _(dotsPerPixelArray.value)
                        .slice(1).value(),
                    baseFileExtension.value,
                )
                : undefined
        ),
    );
    const notWebpSrcSets = computed(
        () => (
            _(
                createRestSrcSets(
                    path.value,
                    imageParamSets.value,
                    dotsPerPixelArray.value,
                    baseFileExtension.value,
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
                        path.value,
                        imageParamSets.value[0],
                        dotsPerPixelArray.value,
                        'webp',
                    ),
                ]
                : []
        ),
    );
    const webpSrcSets = computed(
        () => _(zeroWebpSrcSet.value)
            .concat(
                createRestSrcSets(
                    path.value,
                    imageParamSets.value,
                    dotsPerPixelArray.value,
                    'webp',
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
