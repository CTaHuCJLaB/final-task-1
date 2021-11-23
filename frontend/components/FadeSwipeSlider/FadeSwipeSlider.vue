<template lang="pug">
    .fade-swipe-slider
        .fade-swipe-slider__random-navbar
            slider-pagination(
                :slidePreviews="slidePreviews"
                :active-slide-index="activeSlideIndex"
                @previewclick="onPreviewClick"
            )
            p.fade-swipe-slider__link
                nuxt-link(:to="{ path: '/paintings' }")
                    | все картины
        slider-screen(
            :slides="slides"
            :active-slide-index="activeSlideIndex"
        )
        .fade-swipe-slider__consistent-navbar
            base-button.button--left(
                ref="leftArrow"
                @click.native="onLeftArrowClick"
            )
            .fade-swipe-slider__slide-info
                p.fade-swipe-slider__slide-title
                    | {{slides[activeSlideIndex].title}}
                p.fade-swipe-slider__slide-counter
                    | {{activeSlideIndex + 1}}
                    span.fade-swipe-slider__faded-text
                        |  / {{slides.length}}
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
