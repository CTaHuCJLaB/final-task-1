import { reactive, provide } from '@nuxtjs/composition-api';

export default (slidePreviews, activeSlideIndex) => {
    const outerSliderPaginationState = reactive({
        slidePreviews,
        activeSlideIndex,
    });
    provide(
        'outerSliderPaginationState',
        outerSliderPaginationState,
    );
};
