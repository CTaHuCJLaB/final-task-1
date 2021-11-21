<template lang="pug">
    .fade-swipe-slider
        slider-pagination(
            :slidePreviews="slidePreviews"
            :shown-previews-start-index="shownPreviewsStartIndex"
            :active-preview-relative-index="activePreviewRelativeIndex"
            @previewCountPassed="onPreviewCountPassed"
            @previewclick="onPreviewClick"
        )
        .fade-swipe-slider__screen
        .fade-swipe-slider__navbar
            base-button.button--left(
                ref="leftArrow"
                @click.native="onLeftArrowClick"
            )
            .fade-swipe-slider__slide-info
                p.fade-swipe-slider__slide-title
                p.fade-swipe-slider__slide-counter
            base-button.button--right(
                @click.native="onRightArrowClick"
            )
</template>

<script>
import $ from 'jquery';
import _ from 'lodash';
import { mapGetters } from 'vuex';
import SliderPagination from './SliderPagination/SliderPagination';
// import SwipeSliderScreen from './SwipeSliderScreen/SwipeSliderScreen';

export default {
    components: {
        SliderPagination,
    //     SwipeSliderScreen,
    },
    data() {
        return {
            previewCount: undefined,
            shownPreviewsStartIndex: 0,
            activePreviewRelativeIndex: 4,
        };
    },
    computed: {
        ...mapGetters([
            'slidePreviews',
            'slides',
        ]),
        shownPreviews() {
            return _(this.slidePreviews)
                .slice(
                    this.shownPreviewsStartIndex,
                    this.shownPreviewsStartIndex + this.previewCount,
                ).value();
        },
        isArrowsDisplayed() {
            return $(this.$refs.leftArrow.$el)
                .css('display') !== 'none';
        },
    },
    methods: {
        onPreviewCountPassed(previewCount) {
            this.previewCount = previewCount;
        },
        onLeftArrowClick() {
            if (this.activePreviewRelativeIndex > 0) {
                this.activePreviewRelativeIndex--;
            } else if (this.shownPreviewsStartIndex > 0) {
                this.shownPreviewsStartIndex--;
            }
        },
        onRightArrowClick() {
            if (this.activePreviewRelativeIndex < this.previewCount - 1) {
                this.activePreviewRelativeIndex++;
            } else if (this.shownPreviewsStartIndex <
                this.slidePreviews.length - this.previewCount) {
                this.shownPreviewsStartIndex++;
            }
        },
        onPreviewClick(previewRelativeIndex) {
            this.activePreviewRelativeIndex = previewRelativeIndex;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'fade-swipe-slider.scss';
</style>
