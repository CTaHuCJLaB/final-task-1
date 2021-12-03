<template lang="pug">
    p.second-image
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
                        x1Width: 280,
                        canvasWidth: 'calc(100vw - 40px)',
                    },
                    desktop: {
                        x1Width: 920,
                        canvasWidth: '920px',
                    },
                },
            );
        },
    },
};
</script>

<style lang="scss" scoped>
    @import 'second-image.scss';
</style>
