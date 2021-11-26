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
import { reactive, provide } from '@nuxtjs/composition-api';
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
        const description = `Показать слайд ${previewTitle}`;

        const outerControlState = reactive({
            description,
        });
        provide(
            'outerControlState',
            outerControlState,
        );
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
