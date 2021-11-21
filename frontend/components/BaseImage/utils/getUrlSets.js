import _ from 'lodash';

export default (imageParamSets, format) =>
    _(imageParamSets).map(
        ({ relativeUrls }) => relativeUrls[format],
    ).value();
