<template lang="pug">
    .consistent-slider-navbar
        left-arrow-button(
            :disabled="isLeftArrowDisabled"
            ref="leftArrow"
            @click.native="$emit('leftarrowclick')"
        )
        slide-info
        right-arrow-button(
            :disabled="isRightArrowDisabled"
            @click.native="$emit('rightarrowclick')"
        )
</template>

<script>
import $ from 'jquery';
import SlideInfo from '../SlideInfo/SlideInfo';
import LeftArrowButton from '../LeftArrowButton/LeftArrowButton';
import RightArrowButton from '../RightArrowButton/RightArrowButton';
import { createNumberPropConfig } from '@/modules/propConfigs';

export default {
    components: {
        SlideInfo,
        LeftArrowButton,
        RightArrowButton,
    },
    props: {
        activeSlideIndex: createNumberPropConfig(undefined),
        slideCount: createNumberPropConfig(),
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
