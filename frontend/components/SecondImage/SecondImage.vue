<template lang="pug">
    p.second-image
        base-image(
            :title="image.title"
            :alt="image.alt"
            :image="image"
            :dimensions="dimensions"
        )
</template>

<script>
import { createObjectPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        image: createObjectPropConfig(),
    },
    data() {
        return {
            dimensions: {
                mobile: {
                    x1Width: 280,
                    canvasWidth: 'calc(100vw - 40px)',
                },
                desktop: {
                    x1Width: 920,
                    canvasWidth: '920px',
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
    @import 'second-image.scss';
</style>
