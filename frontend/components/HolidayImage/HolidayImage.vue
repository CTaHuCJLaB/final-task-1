<template lang="pug">
  base-image(
    class="image--holiday"
    :alt="imageData.alt"
    :image-param-sets="imageParamSets"
  )
</template>

<script>
import getImageUrls from '@/modules/getImageUrls';

export default {
    computed: {
        imageData() {
            return this.$store
                .state.homePageData
                .header.image;
        },
        imageParamSets() {
            return {
                0: {
                    relativeUrls: {
                        notWebp: getImageUrls(
                            this.imageData,
                            'mobile', 'notWebp',
                        ),
                        webp: getImageUrls(
                            this.imageData,
                            'mobile', 'webp',
                        ),
                    },
                    x1Width: 320,
                    canvasWidth: '100vw',
                },
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
                    x1Width: 460,
                    canvasWidth:
                        'calc(460 / 800 * 100vh)',
                },
            };
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'image.scss';
</style>
