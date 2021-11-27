import { computed, reactive, provide }
from '@nuxtjs/composition-api';

export default (slides, activeSlideIndex, slideCount) => {
    const activeSlideTitle = computed(
        () => slides[activeSlideIndex.value]
            .title,
    );
    const outerSlideInfoState = reactive({
        activeSlideIndex,
        activeSlideTitle,
        slideCount,
    });
    provide(
        'outerSlideInfoState',
        outerSlideInfoState,
    );
};
