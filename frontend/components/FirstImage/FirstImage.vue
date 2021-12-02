<template lang="pug">
    p.first-image
        base-image(
            :title="image.title"
            :alt="image.alt"
            :image-param-sets="imageParamSets"
        )
</template>

<script>
import { createObjectPropConfig } from '@/modules/propConfigs';
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    props: {
        image: createObjectPropConfig(),
    },
    computed: {
        imageParamSets() {
            return createImageParamSets(
                this.image,
                {
                    mobile: {
                        x1Width: 240,
                        canvasWidth: '240px',
                    },
                    desktop: {
                        x1Width: 240,
                        canvasWidth: '240px',
                    },
                },
            );
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'first-image.scss';
</style>
