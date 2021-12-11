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
            ref="leftArrow"
            :disabled="isLeftArrowDisabled"
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
import { ref, computed } from '@nuxtjs/composition-api';
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
import { createStringPropConfig, createArrayPropConfig }
from '@/modules/propConfigs';

export default {
    components: {
        SliderScreen,
        LeftArrowButton,
        RightArrowButton,
        RandomSliderNavbar,
    },
    props: {
        slidePreviews: createArrayPropConfig(),
        slides: createArrayPropConfig(),
        previewTitlePrefix: createStringPropConfig(),
        slideTitlePrefix: createStringPropConfig(),
    },
    setup(props) {
        const {
            slidePreviews, slides,
            previewTitlePrefix, slideTitlePrefix,
        } = props;
        useOuterPreviewButtonState(previewTitlePrefix);
        useOuterSliderComposablesState(slideTitlePrefix);
        const activeSlideIndex = ref(7);
        useOuterSliderPaginationState(
            slidePreviews, activeSlideIndex,
        );
        const slideCount = slides.length;
        const activeSlideTitle = computed(
            () => slides[activeSlideIndex.value]
                .title,
        );
        return {
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
