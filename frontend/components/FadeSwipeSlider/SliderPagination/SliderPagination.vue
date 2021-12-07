<template lang="pug">
    .slider-pagination
        ul.slider-pagination__film(
            :style="filmStyle"
        )
            li.slider-pagination__preview(
                v-for="(preview, index) in slidePreviews"
                :key="preview.title + index"
            )
                image-preview-button(
                    :preview="preview"
                    :is-preview-active="isPreviewActive(index)"
                    @click.native="onPreviewClick(index)"
                )
</template>

<script>
import _ from 'lodash';
import { inject } from '@nuxtjs/composition-api';
import ImagePreviewButton
from '../ImagePreviewButton/ImagePreviewButton';

export default {
    components: {
        ImagePreviewButton,
    },
    setup() {
        const outerSliderPaginationState = inject(
            'outerSliderPaginationState',
            {
                slidePreviews: [],
                activeSlideIndex: null,
            },
        );

        return outerSliderPaginationState;
    },
    data() {
        return {
            SHOWN_PREVIEW_COUNT: 5,
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
                    this.shownPreviewsStartIndex + this.SHOWN_PREVIEW_COUNT,
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
                if (this.activePreviewRelativeIndex <
                    this.SHOWN_PREVIEW_COUNT - 1) {
                    this.activePreviewRelativeIndex += newValue - oldValue;
                } else if (this.shownPreviewsStartIndex <
                    this.slidePreviews.length - this.SHOWN_PREVIEW_COUNT) {
                    this.shownPreviewsStartIndex++;
                }
            }
        },
    },
    methods: {
        onPreviewClick(newActiveSlideIndex) {
            this.$parent
                .$emit('previewclick', newActiveSlideIndex);
        },
        isPreviewActive(previewIndex) {
            return previewIndex === this.shownPreviewsStartIndex +
                this.activePreviewRelativeIndex;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'slider-pagination.scss';
</style>
