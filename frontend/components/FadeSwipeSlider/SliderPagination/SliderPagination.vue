<template lang="pug">
    .slider-pagination
        ul.slider-pagination__film(
            :style="filmStyle"
        )
            li.slider-pagination__preview(
                @click="onPreviewClick(index)"
                :class="getPreviewClasses(index)"
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
import _ from 'lodash';
import {
    createArrayPropConfig, createNumberPropConfig,
} from '@/modules/propConfigs';
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    props: {
        slidePreviews:
            createArrayPropConfig(),
        activeSlideIndex:
            createNumberPropConfig(0),
    },
    data() {
        return {
            PREVIEW_COUNT: 5,
            PREVIEW_WIDTH: 120,
            COLUMN_GAP: 40,
            shownPreviewsStartIndex: 0,
            activePreviewRelativeIndex: 4,
        };
    },
    computed: {
        shownPreviews() {
            return _(this.slidePreviews)
                .slice(
                    this.shownPreviewsStartIndex,
                    this.shownPreviewsStartIndex + this.PREVIEW_COUNT,
                ).value();
        },
        filmTranslateX() {
            return -(this.PREVIEW_WIDTH + this.COLUMN_GAP) *
                this.shownPreviewsStartIndex;
        },
        filmStyle() {
            return {
                transform:
                    `translateX(${this.filmTranslateX}px)`,
            };
        },
    },
    watch: {
        activeSlideIndex(newValue, oldValue) {
            if (newValue < oldValue) {
                if (this.activePreviewRelativeIndex > 0) {
                    this.activePreviewRelativeIndex -= oldValue - newValue;
                } else if (this.shownPreviewsStartIndex > 0) {
                    this.shownPreviewsStartIndex--;
                }
            }
            if (newValue > oldValue) {
                if (this.activePreviewRelativeIndex < this.PREVIEW_COUNT - 1) {
                    this.activePreviewRelativeIndex += newValue - oldValue;
                } else if (this.shownPreviewsStartIndex <
                    this.slidePreviews.length - this.PREVIEW_COUNT) {
                    this.shownPreviewsStartIndex++;
                }
            }
        },
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
        onPreviewClick(newActiveSlideIndex) {
            this.$emit('previewclick', newActiveSlideIndex);
        },
        isPreviewActive(previewIndex) {
            return previewIndex === this.shownPreviewsStartIndex +
                this.activePreviewRelativeIndex;
        },
        getPreviewClasses(previewIndex) {
            return {
                'slider-pagination__preview--active':
                    this.isPreviewActive(previewIndex),
            };
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'slider-pagination.scss';
</style>
