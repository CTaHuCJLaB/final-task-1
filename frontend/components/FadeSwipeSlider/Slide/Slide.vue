<template lang="pug">
    component.slide(
        :is="isScreenOverflowing ? 'li' : 'p'"
    )
        base-image(
            :title="paintingTitlePrefix + ` \"${slide.title}\"`"
            :alt="slide.alt"
            :image="slide"
            :dimensions="dimensions"
        )
</template>

<script>
import { inject } from '@nuxtjs/composition-api';
import { createObjectPropConfig } from '@/modules/propConfigs';

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
    data() {
        return {
            dimensions: {
                mobile: {
                    x1Width: 200,
                    canvasWidth: 'calc(200 / 320 * 100vw)',
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
@import 'slide.scss';
</style>
