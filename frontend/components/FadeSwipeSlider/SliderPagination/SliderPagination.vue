<template lang="pug">
    .slider-pagination
        ul.slider-pagination__film(
            :style="{\
                'transform':\
                    `translateX(${filmTranslateX}px)`\
            }"
        )
            li.slider-pagination__preview(
                @click="$emit(\
                    'previewclick',\
                    index - shownPreviewsStartIndex\
                )"
                :class="{\
                    'slider-pagination__preview--active':\
                    index === shownPreviewsStartIndex +\
                        activePreviewRelativeIndex\
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
import {
    createArrayPropConfig, createNumberPropConfig,
} from '@/modules/propConfigs';
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    props: {
        slidePreviews:
            createArrayPropConfig(),
        shownPreviewsStartIndex:
            createNumberPropConfig(0),
        activePreviewRelativeIndex:
            createNumberPropConfig(0),
    },
    data() {
        return {
            PREVIEW_COUNT: 5,
            PREVIEW_WIDTH: 120,
            COLUMN_GAP: 40,
        };
    },
    computed: {
        filmTranslateX() {
            return -(this.PREVIEW_WIDTH + this.COLUMN_GAP) *
                this.shownPreviewsStartIndex;
        },
    },
    created() {
        this.$emit('previewCountPassed', this.PREVIEW_COUNT);
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
