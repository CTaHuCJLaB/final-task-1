<template lang="pug">
    .slider-screen
        client-only(placeholder="Загрузка...")
            component(
                :is="isScreenOverflowing ? 'ul' : 'fading'"
                :class="{ 'slider-screen__film': isScreenOverflowing }"
            )
                component.slider-screen__slide(
                    :is="isScreenOverflowing ? 'li' : 'p'"
                    v-for="(slide, index) in renderedSlides"
                    :key="slide.title + activeSlideIndex"
                )
                    base-image(
                        :title="paintingTitlePrefix + ` \"${slide.title}\"`"
                        :alt="slide.alt"
                        :image-param-sets="createImageParamSets(slide)"
                    )
</template>

<script>
import $ from 'jquery';
import _ from 'lodash';
// import anime from 'animejs';
import { inject } from '@nuxtjs/composition-api';
import {
    createArrayPropConfig, createNumberPropConfig,
} from '@/modules/propConfigs';
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    props: {
        slides: createArrayPropConfig(),
        activeSlideIndex:
            createNumberPropConfig(undefined),
    },
    setup() {
        const outerSliderComposablesState = inject(
            'outerSliderComposablesState',
            { paintingTitlePrefix: '' },
        );

        return outerSliderComposablesState;
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
            let result = true;
            if (this.$el) {
                result = $(this.$el)
                    .css('overflow-x') === 'hidden';
            }

            return result;
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
    },
};
</script>

<style lang="scss" scoped>
@import 'slider-screen.scss';
</style>
