<template lang="pug">
    .random-slider-navbar
        slider-pagination
        internal-link(
            path="/paintings"
            title="все картины"
        )
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
