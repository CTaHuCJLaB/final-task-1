<template lang="pug">
    base-image(
        class="image--holiday"
        :alt="image.alt"
        :image-param-sets="imageParamSets"
    )
</template>

<script>
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    computed: {
        image() {
            return this.$store
                .state.homePageData
                .header.image;
        },
        imageParamSets() {
            return createImageParamSets(
                this.image,
                {
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
            );
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'image.scss';
</style>
