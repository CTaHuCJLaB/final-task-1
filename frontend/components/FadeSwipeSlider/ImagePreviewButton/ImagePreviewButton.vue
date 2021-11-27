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
import { inject, reactive, provide } from '@nuxtjs/composition-api';
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
        const outerPreviewButtonState = inject(
            'outerPreviewButtonState',
            { previewTitlePrefix: '' },
        );
        const { previewTitlePrefix } = outerPreviewButtonState;
        const outerSliderComposablesState = inject(
            'outerSliderComposablesState',
            { paintingTitlePrefix: '' },
        );
        const { paintingTitlePrefix } = outerSliderComposablesState;
        const { title: previewTitle } = props.preview;
        const previewFullTitle = previewTitlePrefix +
            ` "${previewTitle}"`;
        const description = 'Перейти к слайду ' +
            `'${paintingTitlePrefix} ` +
            `"${previewTitle}"'`;
        const outerControlState = reactive({
            description,
        });
        provide(
            'outerControlState',
            outerControlState,
        );

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
