<template lang="pug">
    .fade-swipe-slider
        slider-pagination(
            ref="sliderPagination"
            @hook:mounted="sliderPaginationMounted"
        )
</template>

<script>
import $ from 'jquery';
import SliderPagination from './SliderPagination/SliderPagination.vue';

export default {
    components: {
        SliderPagination,
    },
    data() {
        return {
            currentFileNames: [
            ],
        };
    },
    methods: {
        sliderPaginationMounted() {
            // console.log(this.isSliderPaginationDisplayed());
            $(window).resize(
                // evt => console.log(this.isSliderPaginationDisplayed()),
            );
        },
        isSliderPaginationDisplayed() {
            return getComputedStyle(this.$refs.sliderPagination.$el)
                .display !== 'none';
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'fade-swipe-slider.scss';
</style>
