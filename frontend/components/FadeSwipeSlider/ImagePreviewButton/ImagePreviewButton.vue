<template lang="pug">
    base-button.button--preview(
        :class="{'button--active': isPreviewActive}"
    )
        template(#icon)
            base-image(
                :title="preview.title"
                :alt="preview.alt"
                :image-param-sets="\
                    createImageParamSets(preview)\
                "
            )
</template>

<script>
import {
    createObjectPropConfig, falsePropConfig,
} from '@/modules/propConfigs';
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    props: {
        preview: createObjectPropConfig(),
        isPreviewActive: falsePropConfig,
    },
    methods: {
        createImageParamSets(preview) {
            return createImageParamSets(
                preview,
                {
                    desktop: {
                        x1Width: 120,
                        canvasWidth: '120px',
                    },
                },
            );
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'button.scss';
</style>
