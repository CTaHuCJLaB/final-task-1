<template lang="pug">
    .fade-swipe-slider
        slider-pagination(
            :slidePreviews="slidePreviews"
            :active-slide-index="activeSlideIndex"
            @previewclick="onPreviewClick"
        )
        slider-screen(
            :slides="slides"
            :active-slide-index="activeSlideIndex"
        )
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
import { mapGetters } from 'vuex';
import SliderPagination from './SliderPagination/SliderPagination';
import SliderScreen from './SliderScreen/SliderScreen';

export default {
    components: {
        SliderPagination,
        SliderScreen,
    },
    data() {
        return {
            previewCount: undefined,
            activeSlideIndex: 4,
        };
    },
    computed: {
        ...mapGetters([
            'slidePreviews',
            'slides',
        ]),
        isArrowsDisplayed() {
            return $(this.$refs.leftArrow.$el)
                .css('display') !== 'none';
        },
    },
    methods: {
        onLeftArrowClick() {
            if (this.activeSlideIndex > 0) {
                this.activeSlideIndex--;
            }
        },
        onRightArrowClick() {
            if (this.activeSlideIndex < this.slides.length - 1) {
                this.activeSlideIndex++;
            }
        },
        onPreviewClick(newActiveSlideIndex) {
            this.activeSlideIndex = newActiveSlideIndex;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'fade-swipe-slider.scss';
</style>
