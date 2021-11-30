<template lang="pug">
    .fade-swipe-slider
        random-slider-navbar(
            @previewclick="onPreviewClick"
        )
        slider-screen(
            :slides="slides"
            :active-slide-index.sync="activeSlideIndex"
        )
        left-arrow-button(
            :disabled="isLeftArrowDisabled"
            ref="leftArrow"
            @click.native="onLeftArrowClick"
        )
        p.fade-swipe-slider__slide-title
            | {{activeSlideTitle}}
        p.fade-swipe-slider__slide-counter
            | {{activeSlideIndex + 1}}
            span.fade-swipe-slider__faded-text
                |  / {{slideCount}}
        right-arrow-button(
            :disabled="isRightArrowDisabled"
            @click.native="onRightArrowClick"
            )
</template>

<script>
import $ from 'jquery';
import { useStore, ref, computed } from '@nuxtjs/composition-api';
import SliderScreen from './SliderScreen/SliderScreen';
import LeftArrowButton from './LeftArrowButton/LeftArrowButton';
import RightArrowButton from './RightArrowButton/RightArrowButton';
import RandomSliderNavbar
from './RandomSliderNavbar/RandomSliderNavbar';
import useOuterPreviewButtonState
from './composables/useOuterPreviewButtonState';
import useOuterSliderComposablesState
from './composables/useOuterSliderComposablesState';
import useOuterSliderPaginationState
from './composables/useOuterSliderPaginationState';

export default {
    components: {
        SliderScreen,
        LeftArrowButton,
        RightArrowButton,
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
        const activeSlideTitle = computed(
            () => slides[activeSlideIndex.value]
                .title,
        );
        return {
            slidePreviews,
            slides,
            activeSlideIndex,
            slideCount,
            activeSlideTitle,
        };
    },
    computed: {
        isArrowsDisplayed() {
            return $(this.$refs.leftArrow.$el)
                .css('display') !== 'none';
        },
        isLeftArrowDisabled() {
            return this.activeSlideIndex === 0;
        },
        isRightArrowDisabled() {
            return this.activeSlideIndex ===
                this.slideCount - 1;
        },
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
