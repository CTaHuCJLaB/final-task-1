import _ from 'lodash';
import { computeFullFileName, createSrc } from './base';

const srcMapIteratee = (
    path, fileName, dotsPerPixel,
    fileExtension, x1Width,
    index, array,
) => {
    const fullFileName = computeFullFileName(
        path, fileName,
        dotsPerPixel, fileExtension,
    );
    return createSrc(
        fullFileName, x1Width,
        dotsPerPixel, index, array.length,
    );
};

export const createSrcSet = (
    path, imageParamSet,
    dotsPerPixelArray, fileExtension,
) => {
    const {
        fileName, x1Width,
    } = imageParamSet;
    return _(dotsPerPixelArray).map(
        (dotsPerPixel, index, array) => (
            srcMapIteratee(
                path, fileName, dotsPerPixel,
                fileExtension, x1Width,
                index, array,
            )
        ),
    ).join(' ');
};

const addSrcSet = (
    srcSets, path, imageParamSet,
    dotsPerPixelArray, fileExtension,
) => {
    const newSrcSet = createSrcSet(
        path, imageParamSet,
        dotsPerPixelArray, fileExtension,
    );
    srcSets.push(newSrcSet);
};

export const createRestSrcSets = (
    path, imageParamSets,
    dotsPerPixelArray, fileExtension,
) => {
    const srcSets = [];
    _(imageParamSets)
        .filter((value, key) => key > 0)
        .forEach(
            imageParamSet => {
                addSrcSet(
                    srcSets, path, imageParamSet,
                    dotsPerPixelArray, fileExtension,
                );
            },
        );
    return srcSets;
};
