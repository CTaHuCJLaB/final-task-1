import _ from 'lodash';
import get1xWidths from '../utils/get1xWidths';
import { createSrcSet, createRestSrcSets } from '../utils/srcSets';
import getRestSrcs from '../utils/getRestSrcs';

export default (image, dimensions) => {
    let zero1xWidth;
    if (dimensions.mobile) {
        zero1xWidth = dimensions.mobile.x1Width;
    }
    const restDimensions = _(dimensions)
        .pickBy(
            (dimension, key) => key !== 'mobile',
        )
        .value();
    const rest1xWidths = get1xWidths(restDimensions);
    const zeroNotWebpSrcSet = dimensions.mobile
        ? createSrcSet(
            _(image.mobile.notWebp)
                .slice(1).value(),
            zero1xWidth,
        )
        : null;
    const restNotWebpSrcSets = _(
        createRestSrcSets(
            getRestSrcs(image, 'notWebp'),
            rest1xWidths,
        ),
    ).reverse().value();
    const zeroWebpSrcSet = dimensions.mobile
        ? [
            createSrcSet(
                image.mobile.webp,
                zero1xWidth,
            ),
        ]
        : [];
    const webpSrcSets = _(zeroWebpSrcSet.value)
        .concat(
            createRestSrcSets(
                getRestSrcs(image, 'webp'),
                rest1xWidths,
            ),
        )
        .reverse()
        .value();

    return {
        webpSrcSets,
        restNotWebpSrcSets,
        zeroNotWebpSrcSet,
    };
};
