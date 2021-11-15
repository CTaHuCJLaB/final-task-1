import _ from 'lodash';

export default imageParamSets =>
    _(imageParamSets).map(
        imageParamSet => imageParamSet.x1Width,
    ).value();
