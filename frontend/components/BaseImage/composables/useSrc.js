import _ from 'lodash';
import { computed }
    from '@nuxtjs/composition-api';
import { computeFullFileName }
    from '../utils/base';

export default (
    path,
    imageParamSets,
    baseFileExtension,
) => computed(
    () => {
        const minParamSetKey = _(
            imageParamSets.value,
        ).keys().min();
        return computeFullFileName(
            path.value,
            imageParamSets
                .value[minParamSetKey]
                .fileName,
            1,
            baseFileExtension.value,
        );
    },
);
