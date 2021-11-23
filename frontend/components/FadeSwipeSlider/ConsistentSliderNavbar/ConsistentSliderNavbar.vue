<template lang="pug">
    .consistent-slider-navbar
        base-button.button--left(
            ref="leftArrow"
            @click.native="$emit('leftarrowclick')"
        )
        slide-info
        base-button.button--right(
            @click.native="$emit('rightarrowclick')"
        )
</template>

<script>
import $ from 'jquery';
import SlideInfo from '../SlideInfo/SlideInfo';

export default {
    components: {
        SlideInfo,
    },
    computed: {
        isArrowsDisplayed() {
            return $(this.$refs.leftArrow.$el)
                .css('display') !== 'none';
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'consistent-slider-navbar.scss';
</style>
