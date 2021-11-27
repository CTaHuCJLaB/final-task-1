import _ from 'lodash';
import devices from './devices';

const setRelativeUrls = (map, image, device, index) => {
    map[index] = {
        relativeUrls: {
            notWebp: null,
            webp: null,
        },
    };
    _(['notWebp', 'webp']).forEach(
        format => {
            map[index].relativeUrls[format] =
                _(image[device][format])
                    .map(({ url }) => url).value();
        },
    );
};

export const createImageParamSets = (image, dimensions) =>
    _(devices).filter(device => image[device])
        .reduce(
            (map, device, index) => {
                setRelativeUrls(map, image, device, index);
                map[index].x1Width = dimensions[device]
                    .x1Width;
                map[index].canvasWidth = dimensions[device]
                    .canvasWidth;

                return map;
            }, {},
        );
