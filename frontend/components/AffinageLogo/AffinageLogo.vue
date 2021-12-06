<template lang="pug">
    p.affinage-logo
        a(
            href="https://affinage.ru/"
            target="_blank"
        )
            base-image(
                class="image--affinage"
                :title="image.title"
                :alt="image.alt"
                :image="image"
                :dimensions="dimensions"
            )
</template>

<script>
export default {
    data() {
        return {
            dimensions: {
                desktop: {
                    x1Width: 60,
                    canvasWidth: '60px',
                },
            },
        };
    },
    computed: {
        image() {
            return this.$store
                .state.homePageData
                .header.logo;
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'affinage-logo.scss';
</style>
