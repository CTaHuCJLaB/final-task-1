import { provide } from '@nuxtjs/composition-api';

export default (slidePreviews, activeSlideIndex) => {
    const outerSliderPaginationState = {
        slidePreviews,
        activeSlideIndex,
    };
    provide(
        'outerSliderPaginationState',
        outerSliderPaginationState,
    );
};
