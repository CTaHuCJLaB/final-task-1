<template lang="pug">
    base-image.image--vast(
        :alt="image.alt"
        :image="image"
        :dimensions="dimensions"
    )
</template>

<script>
import { mapGetters } from 'vuex';

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
        ...mapGetters('indexHeader', [
            'image',
        ]),
    },
};
</script>

<style lang="scss" scoped>
    @import 'image.scss';
</style>
