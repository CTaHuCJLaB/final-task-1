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
                .header.logo;
        },
        imageParamSets() {
            return createImageParamSets(
                this.image,
                {
                    desktop: {
                        x1Width: 60,
                        canvasWidth: '60px',
                    },
                },
            );
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'affinage-logo.scss';
</style>
