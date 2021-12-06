import _ from 'lodash';
import devices from '@/modules/devices';

export default (image, format) => _(image)
    .pickBy(
        (value, key) => _(devices)
            .includes(key) && key !== 'mobile',
    ).values()
    .map(
        specificDeviceSrcs =>
            specificDeviceSrcs[format],
    ).value();
