<template lang="pug">
    .slider-pagination
        ul.slider-pagination__film(
            ref="film"
            :style="filmStyle"
        )
            li.slider-pagination__preview(
                v-for="(preview, index) in slidePreviews"
                ref="filmItems"
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
            previewGap: null,
            shownPreviewCount: null,
            previewGaps: null,
            shownPreviewsStartIndex: null,
            activePreviewRelativeIndex: null,
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
                this.computeParams();
                if (this.activeSlideIndex >= this.shownPreviewCount) {
                    this.shownPreviewsStartIndex =
                        this.activeSlideIndex - (this.shownPreviewCount - 1);
                    this.activePreviewRelativeIndex = this.shownPreviewCount - 1;
                } else {
                    this.shownPreviewsStartIndex = 0;
                    this.activePreviewRelativeIndex = this.activeSlideIndex;
                }
                this.computeFilmStyle();
            }
        },
        onPreviewClick(newActiveSlideIndex) {
            this.$parent
                .$emit('previewclick', newActiveSlideIndex);
        },
        computeParams() {
            this.previewWidth = $(this.$refs.filmItems[0])
                .children().width();
            this.previewsWidth = this.previewWidth * this.previewCount;
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
