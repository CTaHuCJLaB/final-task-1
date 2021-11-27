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
import { ref, useStore } from '@nuxtjs/composition-api';
import SliderScreen from './SliderScreen/SliderScreen';
import ConsistentSliderNavbar
from './ConsistentSliderNavbar/ConsistentSliderNavbar';
import RandomSliderNavbar
from './RandomSliderNavbar/RandomSliderNavbar';
import useOuterPreviewButtonState
from './composables/useOuterPreviewButtonState';
import useOuterSliderComposablesState
from './composables/useOuterSliderComposablesState';
import useOuterSliderPaginationState
from './composables/useOuterSliderPaginationState';
import useOuterSlideInfoState
from './composables/useOuterSlideInfoState';

export default {
    components: {
        SliderScreen,
        ConsistentSliderNavbar,
        RandomSliderNavbar,
    },
    setup() {
        const store = useStore();
        useOuterPreviewButtonState(store);
        useOuterSliderComposablesState(store);
        const slides = store.getters.slides;
        const activeSlideIndex = ref(4);
        const { slidePreviews } = store.getters;
        useOuterSliderPaginationState(
            slidePreviews, activeSlideIndex,
        );
        const slideCount = slides.length;
        useOuterSlideInfoState(
            slides, activeSlideIndex, slideCount,
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
