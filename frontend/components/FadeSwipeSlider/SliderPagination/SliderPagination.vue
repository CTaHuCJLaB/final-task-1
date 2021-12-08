<template lang="pug">
    .slider-pagination
        ul.slider-pagination__film(
            ref="film"
            :style="filmStyle"
        )
            li.slider-pagination__preview(
                v-for="(preview, index) in slidePreviews"
                ref="previews"
                :key="preview.title + index"
            )
                image-preview-button(
                    :preview="preview"
                    :is-preview-active="isPreviewActive(index)"
                    @hook:mounted="onPreviewMounted(index)"
                    @click.native="onPreviewClick(index)"
                )
</template>

<script>
import $ from 'jquery';
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
            previewWidth: null,
            previewsWidth: null,
            filmContentWidth: null,
            previewGap: null,
            shownPreviewCount: null,
            previewGaps: null,
            shownPreviewsStartIndex: 0,
            activePreviewRelativeIndex: 4,
            filmStyle: null,
        };
    },
    computed: {
        previewCount() {
            return this.slidePreviews.length;
        },
    },
    watch: {
        activeSlideIndex(newValue, oldValue) {
            if (newValue < oldValue) {
                if (this.activePreviewRelativeIndex > 0) {
                    this.activePreviewRelativeIndex -= oldValue - newValue;
                    this.computeFilmStyle();
                } else if (this.shownPreviewsStartIndex > 0) {
                    this.shownPreviewsStartIndex--;
                    this.computeFilmStyle();
                }
            }
            if (newValue > oldValue) {
                if (this.activePreviewRelativeIndex <
                    this.shownPreviewCount - 1) {
                    this.activePreviewRelativeIndex += newValue - oldValue;
                    this.computeFilmStyle();
                } else if (this.shownPreviewsStartIndex <
                    this.previewCount - this.shownPreviewCount) {
                    this.shownPreviewsStartIndex++;
                    this.computeFilmStyle();
                }
            }
        },
    },
    methods: {
        onPreviewMounted(previewIndex) {
            if (previewIndex === this.slidePreviews.length - 1) {
                this.computeStaticParams();
                this.computeFilmStyle();
            }
        },
        onPreviewClick(newActiveSlideIndex) {
            this.$parent
                .$emit('previewclick', newActiveSlideIndex);
        },
        computeStaticParams() {
            this.previewWidth = $(this.$refs.previews[0]).width();
            this.previewsWidth = this.previewWidth * this.previewCount;
            this.filmContentWidth = $(this.$refs.film).width();
            this.previewGap = parseFloat(
                $(this.$refs.film).css('column-gap'),
            );
            const paginationWidth = $(this.$el).width();
            this.shownPreviewCount =
                (paginationWidth + this.previewGap) /
                    (this.previewWidth + this.previewGap);
            this.previewGaps = this.previewGap *
                (this.shownPreviewCount - 1);
        },
        computeFilmStyle() {
            const filmTranslateX = this.shownPreviewsStartIndex *
                -(this.previewWidth + this.previewGap);

            this.filmStyle = {
                transform: `translateX(${filmTranslateX}px)`,
            };
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
