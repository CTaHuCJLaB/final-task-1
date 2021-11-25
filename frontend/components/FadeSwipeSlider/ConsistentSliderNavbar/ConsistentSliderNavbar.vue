<template lang="pug">
    .consistent-slider-navbar
        base-button.button--left(
            :disabled="isLeftArrowDisabled"
            ref="leftArrow"
            @click.native="$emit('leftarrowclick')"
        )
        slide-info
        base-button.button--right(
            :disabled="isRightArrowDisabled"
            @click.native="$emit('rightarrowclick')"
        )
</template>

<script>
import $ from 'jquery';
import SlideInfo from '../SlideInfo/SlideInfo';
import { createNumberPropConfig } from '@/modules/propConfigs';

export default {
    components: {
        SlideInfo,
    },
    props: {
        activeSlideIndex: createNumberPropConfig(0),
        slideCount: createNumberPropConfig(5),
    },
    computed: {
        isArrowsDisplayed() {
            return $(this.$refs.leftArrow.$el)
                .css('display') !== 'none';
        },
        isLeftArrowDisabled() {
            return this.activeSlideIndex === 0;
        },
        isRightArrowDisabled() {
            return this.activeSlideIndex ===
                this.slideCount - 1;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'consistent-slider-navbar.scss';
</style>
