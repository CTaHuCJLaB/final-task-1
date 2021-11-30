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

export const createImageParamSets = (image, dimensions) => {
    const _devices = _(devices);

    return _devices.filter(device => image[device])
        .reduce(
            (map, device) => {
                const deviceIndex = _devices.indexOf(device);
                setRelativeUrls(
                    map, image, device, deviceIndex,
                );
                map[deviceIndex].x1Width =
                    dimensions[device].x1Width;
                map[deviceIndex].canvasWidth =
                    dimensions[device].canvasWidth;

                return map;
            }, {},
        );
};
