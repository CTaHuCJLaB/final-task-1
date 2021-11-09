import _ from 'lodash';
import { computed } from '@nuxtjs/composition-api';

export default imageParamSets => {
    const canvasWidths = computed(
        () => _(imageParamSets.value)
            .map(imageParamSet => (
                imageParamSet.canvasWidth
            ))
            .reverse()
            .value(),
    );
    const lastCanvasWidth = computed(
        () => {
            const maxCanvasWidthIndex = canvasWidths
                .value.length - 1;
            return canvasWidths
                .value[maxCanvasWidthIndex];
        },
    );
    return {
        canvasWidths,
        lastCanvasWidth,
    };
};
