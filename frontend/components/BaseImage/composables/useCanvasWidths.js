import _ from 'lodash';
import { ref } from '@nuxtjs/composition-api';

export default dimensions => {
    const canvasWidths = ref(
        _(dimensions)
            .map(({ canvasWidth }) => canvasWidth)
            .reverse()
            .value(),
    );
    const maxCanvasWidthIndex = canvasWidths
        .value.length - 1;
    const lastCanvasWidth = ref(
        canvasWidths
            .value[maxCanvasWidthIndex],
    );
    return {
        canvasWidths,
        lastCanvasWidth,
    };
};
