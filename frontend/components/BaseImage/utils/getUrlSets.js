import _ from 'lodash';

export default (image, dimensions, format) => {
    const res = _(dimensions).keys().map(
        device => _(image[device][format])
            .map(({ url }) => url).value(),
    ).value();
    return res;
};
