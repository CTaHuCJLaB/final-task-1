<template lang="pug">
    .slider-pagination
        ul.slider-pagination__film
            li.slider-pagination__preview(
                @click="onPreviewClick(index)"
                :class="{\
                    'fade-swipe-slider__preview--active':\
                    index === activePreviewRelativeIndex\
                }"
                v-for="(preview, index) in slidePreviews"
                :key="preview.title + index"
            )
                base-image(
                    :title="preview.title"
                    :alt="preview.alt"
                    :image-param-sets="createImageParamSets(preview)"
                )
</template>

<script>
import { createArrayPropConfig } from '@/modules/propConfigs';
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    props: {
        slidePreviews:
            createArrayPropConfig(),
    },
    data() {
        return {
            activePreviewRelativeIndex: 2,
        };
    },
    methods: {
        createImageParamSets(preview) {
            return createImageParamSets(
                preview,
                {
                    desktop: {
                        x1Width: 120,
                        canvasWidth: '120px',
                    },
                },
            );
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'slider-pagination.scss';
</style>
