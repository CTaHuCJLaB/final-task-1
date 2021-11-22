<template lang="pug">
    .slider-screen
        ul.slider-screen__film(
            :style="filmStyle"
        )
            li.slider-screen__slide(
                :style="getSlideStyle(index)"
                v-for="(slide, index) in slides"
                :key="slide.title + index"
            )
                base-image(
                    :title="slide.title"
                    :alt="slide.alt"
                    :image-param-sets="createImageParamSets(slide)"
                )
</template>

<script>
import { createArrayPropConfig } from '@/modules/propConfigs';
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    props: {
        slides: createArrayPropConfig(),
    },
    computed: {
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
