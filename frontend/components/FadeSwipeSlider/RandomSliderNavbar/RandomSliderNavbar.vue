<template lang="pug">
    .random-slider-navbar
        slider-pagination
        p.random-slider-navbar__link
            nuxt-link(:to="{ path: '/paintings' }")
                | все картины
</template>

<script>
import SliderPagination from '../SliderPagination/SliderPagination';

export default {
    components: {
        SliderPagination,
    },
};
</script>

<style lang="scss" scoped>
@import 'random-slider-navbar.scss';
</style>
