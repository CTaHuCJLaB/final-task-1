import _ from 'lodash';
import { computed } from '@nuxtjs/composition-api';

export default dimensions => {
    const canvasWidths = computed(
        () => _(dimensions)
            .map(({ canvasWidth }) => canvasWidth)
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
