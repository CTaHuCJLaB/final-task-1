import _ from 'lodash';

export default dimensions =>
    _(dimensions).map(
        ({ x1Width }) => x1Width,
    ).value();
