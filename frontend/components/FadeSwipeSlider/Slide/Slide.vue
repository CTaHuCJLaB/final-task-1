<template lang="pug">
    component.slide(
        :is="isScreenOverflowing ? 'li' : 'p'"
    )
        base-image(
            :title="paintingTitlePrefix + ` \"${slide.title}\"`"
            :alt="slide.alt"
            :image-param-sets="createImageParamSets(slide)"
        )
</template>

<script>
import { inject } from '@nuxtjs/composition-api';
import { createObjectPropConfig } from '@/modules/propConfigs';
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    props: {
        isScreenOverflowing: {
            type: Boolean,
            default: null,
        },
        slide: createObjectPropConfig(),
    },
    setup() {
        const outerSliderComposablesState = inject(
            'outerSliderComposablesState',
            { paintingTitlePrefix: '' },
        );

        return outerSliderComposablesState;
    },
    methods: {
        createImageParamSets(slide) {
            return createImageParamSets(
                slide,
                {
                    mobile: {
                        x1Width: 200,
                        canvasWidth: 'calc(200 / 320 * 100vw)',
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
@import 'slide.scss';
</style>
