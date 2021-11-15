import _ from 'lodash';

export default (imageParamSets, format) =>
    _(imageParamSets).map(
        imageParamSet => imageParamSet
            .relativeUrls[format],
    ).value();
