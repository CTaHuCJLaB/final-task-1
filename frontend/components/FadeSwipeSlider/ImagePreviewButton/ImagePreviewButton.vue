<template lang="pug">
    base-button.button--preview(
        :class="{'button--active': isPreviewActive}"
    )
        template(#icon)
            base-image(
                :title="previewFullTitle"
                :alt="preview.alt"
                :image-param-sets="\
                    createImageParamSets(preview)\
                "
            )
</template>

<script>
import useOuterControlState from './composables/useOuterControlState';
import usePreviewFullTitle from './composables/usePreviewFullTitle';
import {
    createObjectPropConfig, falsePropConfig,
} from '@/modules/propConfigs';
import { createImageParamSets } from '@/modules/imageDataPreparing';

export default {
    props: {
        preview: createObjectPropConfig(),
        isPreviewActive: falsePropConfig,
    },
    setup(props) {
        const { title: previewTitle } = props.preview;
        useOuterControlState(previewTitle);
        const previewFullTitle =
            usePreviewFullTitle(previewTitle);

        return { previewFullTitle };
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
