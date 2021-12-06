<template lang="pug">
    base-image(
        class="image--holiday"
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
                mobile: {
                    x1Width: 320,
                    canvasWidth: '100vw',
                },
                desktop: {
                    x1Width: 460,
                    canvasWidth:
                        'calc(460 / 800 * 100vh)',
                },
            },
        };
    },
    computed: {
        image() {
            return this.$store
                .state.homePageData
                .header.image;
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'image.scss';
</style>
