<template lang="pug">
    .fade-swipe-slider
        random-slider-navbar(
            @previewclick="onPreviewClick"
        )
        slider-screen(
            :slides="slides"
            :active-slide-index="activeSlideIndex"
        )
        consistent-slider-navbar(
            :active-slide-index="activeSlideIndex"
            :slide-count="slideCount"
            @leftarrowclick="onLeftArrowClick"
            @rightarrowclick="onRightArrowClick"
        )
</template>

<script>
import {
    ref, computed, reactive, provide,
    useStore,
} from '@nuxtjs/composition-api';
import SliderScreen from './SliderScreen/SliderScreen';
import ConsistentSliderNavbar
from './ConsistentSliderNavbar/ConsistentSliderNavbar';
import RandomSliderNavbar
from './RandomSliderNavbar/RandomSliderNavbar';

export default {
    components: {
        SliderScreen,
        ConsistentSliderNavbar,
        RandomSliderNavbar,
    },
    setup() {
        const store = useStore();
        const { previewTitlePrefix } = store.getters;
        const outerPreviewButtonState = {
            previewTitlePrefix,
        };
        provide(
            'outerPreviewButtonState',
            outerPreviewButtonState,
        );
        const { paintingTitlePrefix } = store.getters;
        const outerSliderComposablesState = {
            paintingTitlePrefix,
        };
        provide(
            'outerSliderComposablesState',
            outerSliderComposablesState,
        );
        const slides = computed(
            () => store.getters.slides,
        );
        const activeSlideIndex = ref(4);
        const { slidePreviews } = store.getters;
        const outerSliderPaginationState = reactive({
            slidePreviews,
            activeSlideIndex,
        });
        provide(
            'outerSliderPaginationState',
            outerSliderPaginationState,
        );
        const activeSlideTitle = computed(
            () => slides.value[activeSlideIndex.value]
                .title,
        );
        const slideCount = slides.value.length;
        const outerSlideInfoState = reactive({
            activeSlideIndex,
            activeSlideTitle,
            slideCount,
        });
        provide(
            'outerSlideInfoState',
            outerSlideInfoState,
        );

        return {
            slidePreviews,
            slides,
            activeSlideIndex,
            slideCount,
        };
    },
    methods: {
        onLeftArrowClick() {
            if (this.activeSlideIndex > 0) {
                this.activeSlideIndex--;
            }
        },
        onRightArrowClick() {
            if (this.activeSlideIndex < this.slideCount - 1) {
                this.activeSlideIndex++;
            }
        },
        onPreviewClick(newActiveSlideIndex) {
            this.activeSlideIndex = newActiveSlideIndex;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'fade-swipe-slider.scss';
</style>
