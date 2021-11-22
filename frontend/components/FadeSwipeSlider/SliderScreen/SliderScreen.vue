<template lang="pug">
    .slider-screen
        ul.slider-screen__film(:style="filmStyle")
            fading
                li.slider-screen__slide(
                    :style="getSlideStyle(index)"
                    v-for="(slide, index) in renderedSlides"
                    :key="slide.title + activeSlideIndex"
                )
                    base-image(
                        :title="slide.title"
                        :alt="slide.alt"
                        :image-param-sets="createImageParamSets(slide)"
                    )
</template>

<script>
import $ from 'jquery';
import _ from 'lodash';
import {
    createArrayPropConfig, createNumberPropConfig,
} from '@/modules/propConfigs';
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    props: {
        slides: createArrayPropConfig(),
        activeSlideIndex:
            createNumberPropConfig(0),
    },
    computed: {
        renderedSlides() {
            return this.isScreenOverflowing
                ? this.slides
                : _(this.slides).slice(
                    this.activeSlideIndex,
                    this.activeSlideIndex + 1,
                ).value();
        },
        previousSlide() {
            return this.slides[this.activeSlideIndex - 1];
        },
        isScreenOverflowing() {
            return this.$el
                ? $(this.$el)
                    .css('overflow-x') === 'hidden'
                : undefined;
        },
        filmStyle() {
            return {};
        },
    },
    methods: {
        createImageParamSets(slide) {
            return createImageParamSets(
                slide,
                {
                    mobile: {
                        x1Width: 200,
                        canvasWidth: 'calc(200 / 320 * 100vw)',
                    },
                    desktop: {
                        x1Width: 920,
                        canvasWidth: '920px',
                    },
                },
            );
        },
        getSlideStyle(slideIndex) {
            return {};
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'slider-screen.scss';
</style>
