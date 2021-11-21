import _ from 'lodash';

export default imageParamSets =>
    _(imageParamSets).map(
        ({ x1Width }) => x1Width,
    ).value();
