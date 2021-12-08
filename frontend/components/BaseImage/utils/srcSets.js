import _ from 'lodash';
import { createSrc } from './base';

export const createSrcSet = (srcs, x1Width) => {
    const sortedSrcs = _(srcs)
        .sortBy(({ caption }) => caption)
        .value();

    return _(sortedSrcs).map(
        ({ caption, url }, index, array) =>
            createSrc(
                url, x1Width, caption,
                index, array.length,
            ),
    ).join(' ');
};

const addSrcSet = (srcSets, srcs, x1Width) => {
    const newSrcSet = createSrcSet(srcs, x1Width);
    srcSets.push(newSrcSet);
};

export const createRestSrcSets = (srcsList, x1Widths) => {
    const srcSets = [];
    _(srcsList).forEach(
        (srcs, index) => addSrcSet(
            srcSets, srcs, x1Widths[index],
        ),
    );

    return srcSets;
};
