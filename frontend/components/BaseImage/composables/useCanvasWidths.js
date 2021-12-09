import _ from 'lodash';

export default dimensions => {
    const canvasWidths = _(dimensions)
        .map(({ canvasWidth }) => canvasWidth)
        .reverse()
        .value();
    const maxCanvasWidthIndex =
        canvasWidths.length - 1;
    const lastCanvasWidth =
        canvasWidths[maxCanvasWidthIndex];
    return {
        canvasWidths,
        lastCanvasWidth,
    };
};
