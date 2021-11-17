<template lang="pug">
  p.affinage-logo
    a(
        href="https://affinage.ru/"
        target="_blank"
    )
      base-image(
        class="image--affinage"
        :title="imageData.title"
        :alt="imageData.alt"
        :image-param-sets="imageParamSets"
      )
</template>

<script>
import { getImageUrls } from '@/modules/imageDataPreparing';

export default {
    computed: {
        imageData() {
            return this.$store
                .state.homePageData
                .header.logo;
        },
        imageParamSets() {
            return {
                1: {
                    relativeUrls: {
                        notWebp: getImageUrls(
                            this.imageData,
                            'desktop', 'notWebp',
                        ),
                        webp: getImageUrls(
                            this.imageData,
                            'desktop', 'webp',
                        ),
                    },
                    x1Width: 60,
                    canvasWidth: '60px',
                },
            };
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'affinage-logo.scss';
</style>
