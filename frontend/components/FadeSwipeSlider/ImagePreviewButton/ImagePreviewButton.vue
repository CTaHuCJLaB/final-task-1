<template lang="pug">
    base-button.button--preview(
        :class="{'button--active': isPreviewActive}"
    )
        template(#icon)
            base-image(
                :title="previewFullTitle"
                :alt="preview.alt"
                :image="preview"
                :dimensions="dimensions"
            )
</template>

<script>
import useOuterControlState from './composables/useOuterControlState';
import usePreviewFullTitle from './composables/usePreviewFullTitle';
import {
    createObjectPropConfig, falsePropConfig,
} from '@/modules/propConfigs';

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
    data() {
        return {
            dimensions: {
                desktop: {
                    x1Width: 120,
                    canvasWidth: '120px',
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
@import 'button.scss';
</style>
